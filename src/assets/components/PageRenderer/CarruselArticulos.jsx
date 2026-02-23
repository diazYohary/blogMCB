import React, { useEffect, useState } from "react";
import { STRAPI_API_TOKEN, STRAPI_PAGE_LIMIT } from "../../../../config";
import RecommendedArticles from "../../../pages/Home/RecommendedArticles/RecommendedArticles";
import { fetchAPI } from "../../../utils/fetch-api";

export default function CarruselA({ data }) {
    const { titulo, tipo } = data;
    const [articulos, setArticulos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    async function fetchArticulos(start, limit) {
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
                setArticulos(responseData.data);
            } else {
                setArticulos((prevData) => [...prevData, ...responseData.data]);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchArticlesByCategoria(categoriaId) {

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
            setArticulos(responseData.data);
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    // Se tienen 3 tipos de carruseles: 
    // Articulos fijosvienen dentro del objeto data, 
    // Articulos por categoria y ultimos articulos, 
    // ambos tipos se obtienen a través de fetch
    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            if (tipo === 'ARTICULOS_POR_CATEGORIA') {
                const categoriaId = data.categoria?.documentId;
                await fetchArticlesByCategoria(categoriaId);
            } else if (tipo === 'ULTIMOS_ARTICULOS') {
                await fetchArticulos(0, STRAPI_PAGE_LIMIT);
            }
            setIsLoading(false);
        }

        fetchData();
    }, [tipo]);

    return (
        <RecommendedArticles data={articulos} title={titulo} isLoading={isLoading} />
    );
}