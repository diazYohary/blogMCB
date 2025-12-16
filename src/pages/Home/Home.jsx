import { useCallback, useEffect, useState } from "react";
import HeroSection from "./HeroSection/HeroSection";
import RecommendedArticles from "./RecommendedArticles/RecommendedArticles";
import WhatIF from "./WhatIF/WhatIF";
import Prevention from "./Prevention/Prevention";
import Versus from "./Versus/Versus";
import './Home.scss'
import { fetchAPI } from "../../utils/fetch-api";
import { STRAPI_API_TOKEN, STRAPI_PAGE_LIMIT } from "../../../config";

const Home = () => {
    const [data, setData] = useState([]);
    const [meta, setMeta] = useState({});
    const [loading, setLoading] = useState(false);

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

            setMeta(responseData.meta);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData(0, Number(STRAPI_PAGE_LIMIT));
    }, [fetchData]);



    return (
        <>
            {/* <HeroSection /> */}
            <RecommendedArticles data={data} isLoading={loading}/>
            <WhatIF />
            <Prevention />
            <Versus />
            <RecommendedArticles data={data} />
        </>
    )
}
export default Home;