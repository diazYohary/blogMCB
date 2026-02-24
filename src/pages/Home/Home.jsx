import { useCallback, useEffect, useState } from "react";
import { fetchAPI } from "../../utils/fetch-api";
import { STRAPI_API_TOKEN } from "../../../config";

// ~ styles
import './Home.scss'
import PageRenderer from "../../assets/components/PageRenderer/PageRenderer";
import LoadingScreen from '../../assets/components/LoadingScreen/LoadingScreen'

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [pageData, setPageData] = useState(null);

    const fetchLandingBlogData = useCallback(async () => {

        try {
            const token = STRAPI_API_TOKEN;
            const options = { headers: { Authorization: `Bearer ${token}` } };
            const urlParamsObject = {
                // filter per slug of the landing page
                filters: {
                    slug: {
                        $eq: 'blog-landing-page',
                    },
                },
                populate: {
                    bloques: {
                        populate: '*',
                        on: {
                            'sections.carrusel-videos': {
                                populate: {
                                    videos: {
                                        populate: '*',
                                    },
                                },
                            },
                            'sections.carrusel-articulos': {
                                populate: '*',
                            },
                            'blocks.banner': {
                                populate: {
                                    link: '*',
                                    visual: {
                                        populate: {
                                            imagen: {
                                                fields: ['url'],
                                            },
                                            lottie: {
                                                fields: ['url'],
                                            }
                                        }
                                    },
                                }
                            },
                            'sections.articulo-destacado': {
                                populate: '*',
                            },
                            'sections.seccion-articulos': {
                                populate: {
                                    articulos: {
                                        populate: '*',
                                    },
                                    estilos: {
                                        populate: '*',
                                    },
                                    visual: {
                                        populate: {
                                            imagen: {
                                                fields: ['url'],
                                            },
                                            lottie: {
                                                fields: ['url'],
                                            }
                                        }
                                    },
                                }
                            }
                        },
                    },
                },
            };
            const landingRes = await fetchAPI('/paginas', urlParamsObject, options);
            console.log('Landing Blog Data:', landingRes);
            if (landingRes.data.length > 0) {
                setPageData(landingRes.data[0]);
            }
        } catch (error) {
            console.error(error);
        }
    }, []);


    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            await Promise.all([
                fetchLandingBlogData()
            ]);
            setLoading(false);
        };

        loadData();
    }, [fetchLandingBlogData]);

    if(!pageData) return <LoadingScreen/>

    return (
        <>
            {pageData && pageData.bloques && pageData.bloques.map((seccion, index) => (
                <PageRenderer
                    key={index}
                    bloque={seccion}
                />
            ))}
        </>
    )
}
export default Home;