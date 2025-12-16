import { useState, useEffect } from "react";
import Title from "./Title/Title";
import Body from "./Body/Body";
import Author from "./Author/Author";
import MoreArticles from "./MoreArticles/MoreArticles";
import { fetchAPI } from "../../utils/fetch-api";
import { STRAPI_API_TOKEN } from "../../../config";
import { useParams } from "react-router-dom";

const Article = () => {
    const { slug } = useParams();
    const [articleData, setArticleData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [relatedArticles, setRelatedArticles] = useState([]);

    async function getPostBySlug(slug) {
        try {
            const token = STRAPI_API_TOKEN;
            const path = `/articulos`;
            const urlParamsObject = {
                filters: { slug },
                populate: {
                    portada: { fields: ['url'] },
                    autor: { populate: '*' },
                    categoria: { fields: ['nombre'] },
                    contenidos: { populate: '*' },
                },
            };
            const options = { headers: { Authorization: `Bearer ${token}` } };
            const response = await fetchAPI(path, urlParamsObject, options);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    const fetchRelatedArticles = async (category, start, limit) => {
        try {
            const token = STRAPI_API_TOKEN;
            const path = `/articulos`;
            const urlParamsObject = {
                sort: { createdAt: "desc" },
                filters: { categoria: { nombre: category } },
                populate: {
                    portada: { fields: ["url"] },
                    categoria: { populate: "*" },
                    autor: {
                        populate: "*",
                    },
                },
                pagination: {
                    start: start,
                    limit: limit,
                },
            };
            const options = { headers: { Authorization: `Bearer ${token}` } };
            const response = await fetchAPI(path, urlParamsObject, options);
            return response;

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        async function fetchData() {
            if (slug) {
                setLoading(true);
                console.log("Cargando contenido para slug:", slug);
                const data = await getPostBySlug(slug);
                if (data.data.length === 0) {setError("Artículo no encontrado.") ; setLoading(false); return;};
                setArticleData(data.data[0]);

                const category = data.data[0].categoria.nombre;
                const related = await fetchRelatedArticles(category, 0, 4);
                // quitar este articulo por documentId
                const filteredRelated = related.data.filter(article => article.documentId !== data.data[0].documentId);
                setRelatedArticles(filteredRelated);
                setLoading(false);
            }
        }
        fetchData();
    }, [slug]);
    
    return (
        <>
            {error && <p>{error}</p>}
            {loading && (
                <Title isLoading={loading}/>
            )}
            {articleData && !loading && (
                <>
                    <Title data={articleData}/>
                    <Body data={articleData} />
                    <Author data={articleData} />
                    <MoreArticles articles={relatedArticles} />
                </>
            )}
        </>
    )
}
export default Article;