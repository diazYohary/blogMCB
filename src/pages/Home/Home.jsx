import { useCallback, useEffect, useRef, useState } from "react";
import HeroSection from "./HeroSection/HeroSection";
import ArticleResume from "../../assets/components/ArticleResume/ArticleResume";
import RecommendedArticles from "./RecommendedArticles/RecommendedArticles";
import ABC from "./ABC/ABC";
import Prevention from "./Prevention/Prevention";
import Versus from "./Versus/Versus";
import './Home.scss'
import { fetchAPI } from "../../utils/fetch-api";
import { STRAPI_API_TOKEN, STRAPI_PAGE_LIMIT } from "../../../config";

const Home = () => {
    const [data, setData] = useState([]);
    // const [meta, setMeta] = useState({});
    const [loading, setLoading] = useState(false);
    const [categorias, setCategorias] = useState([]);
    const categoriasRef = useRef(null);


    const fetchData = useCallback(async (start, limit) => {
        setLoading(true);
        try {
            const token = STRAPI_API_TOKEN;
            const path = `/articulos`;
            const urlParamsObject = {
                sort: { createdAt: "desc" },
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
            const responseData = await fetchAPI(path, urlParamsObject, options);

            if (start === 0) {
                setData(responseData.data);
            } else {
                setData((prevData) => [...prevData, ...responseData.data]);
            }

            // setMeta(responseData.meta);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchArticlesByCategoria = useCallback(async (categoriaId) => {

        try {
            const token = STRAPI_API_TOKEN;
            const path = `/articulos`;
            const urlParamsObject = {
                filters: {
                    categoria: {
                        documentId: { $eq: categoriaId },
                    },
                },
                populate: {
                    portada: { fields: ["url"] },
                    categoria: { populate: "*" },
                    autor: {
                        populate: "*",
                    }
                },
                pagination: {
                    limit: 5,
                },
            };
            const options = { headers: { Authorization: `Bearer ${token}` } };
            const responseData = await fetchAPI(path, urlParamsObject, options);
            return responseData.data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }, []);

    const fetchCategorias = useCallback(async () => {

        try {
            const token = STRAPI_API_TOKEN;
            const options = { headers: { Authorization: `Bearer ${token}` } };

            const categoriasRes = await fetchAPI('/categorias', {}, options);

            if(!categoriasRef.current){
                categoriasRef.current = categoriasRes.data
                .sort(() => 0.5 - Math.random())
                .slice(0, 5);
            }

            const categoriasAlAzar = categoriasRef.current;

            const categoriasConArticulos = await Promise.all(
                categoriasAlAzar.map(async (categoria) => {
                    const articulos = await fetchArticlesByCategoria(categoria.documentId);
                    return {
                        ...categoria,
                        articulos,
                    };
                })
            );

            setCategorias(categoriasConArticulos);

        } catch (error) {
            console.error(error);
        }
    }, [fetchArticlesByCategoria]);

    const getRandomArticleFromDay = useCallback(() => {
        if (data.length === 0) return null;
        const today = new Date();
        const seed = today.getFullYear() + today.getMonth() + today.getDate();
        const randomIndex = seed % data.length;
        return data[randomIndex];
    }, [data]);

    useEffect(() => {
        fetchData(0, Number(STRAPI_PAGE_LIMIT));
        fetchCategorias();
    }, [fetchCategorias, fetchData]);



    return (
        <>
            <HeroSection />
            <RecommendedArticles data={data} isLoading={loading}/>
            <ArticleResume data={getRandomArticleFromDay()} isLoading={loading} />
            <ABC/>
            <Prevention />
            <Versus />
            <>
                {// Si las categorias tienen articulos, los mostramos
                    categorias.length > 0 && categorias.map((categoria) => (
                        categoria.articulos.length > 0 &&
                        <RecommendedArticles
                            // si articulos es undefined mostramos loading 
                            isLoading={categoria.articulos === undefined}
                            key={categoria.id}
                            title={categoria.nombre}
                            data={categoria.articulos}
                        />
                    ))}
                {categorias.some(c => c.articulos === undefined) &&
                    <RecommendedArticles
                        isLoading={true}
                        title="Cargando categorías..."
                        data={[]}
                    />}
            </>
        </>
    )
}
export default Home;