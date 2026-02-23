import { useCallback, useEffect, useRef, useState } from "react";
import { fetchAPI } from "../../utils/fetch-api";
import { STRAPI_API_TOKEN, STRAPI_PAGE_LIMIT } from "../../../config";

// ~ COMPONENTS
import HeroSection from "./HeroSection/HeroSection";
import RecommendedArticles from "./RecommendedArticles/RecommendedArticles";

import LandingSection from "../../assets/components/LandingSection/LandingSection";
import ArticleResume from "../../assets/components/ArticleResume/ArticleResume";
import VideoSection from "./VideoSection/VideoSection";

// ~ styles
import './Home.scss'
import PageRenderer from "../../assets/components/PageRenderer/PageRenderer";

// ! video array data
const videos=[
    {url:'https://www.youtube.com/watch?v=p_9MzxTBpb4&list=RDp_9MzxTBpb4&start_radio=1', title:'vIDEO 1', img:'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png'},
    {url:'https://youtu.be/EmRBqX2xbNU?si=eKLl_daBpHX7fGLo', title:'PODCAST 2', img:'https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg'},
    {url:'https://www.youtube.com/watch?v=7h2ryr_uUEs&list=RD7h2ryr_uUEs&start_radio=1', title:'NOTICIAS', img:'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'},
    {url:'https://www.youtube.com/watch?v=qN4ooNx77u0&list=RDqN4ooNx77u0&start_radio=1', title:'VIDEOBLOG', img:'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg'},
    {url:'https://youtu.be/EmRBqX2xbNU?si=eKLl_daBpHX7fGLo', title:'RESUMEN DE LA SEMANA', img:'https://www.techsmith.com/wp-content/uploads/2023/08/What-are-High-Resolution-Images.png'},
]

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
                fetchLandingData(),
                fetchLandingBlogData()
            ]);
            setLoading(false);
        };

        loadData();
    }, [fetchLandingData, fetchLandingBlogData]);



    return (
        <>
            {pageData === null && (<HeroSection url={{ url: 'https://mcbrokers.com.mx/' }} />)}

            {pageData && pageData.bloques && pageData.bloques.map((seccion, index) => (
                <PageRenderer
                    key={index}
                    bloque={seccion}
                />
            ))}


            {/* <RecommendedArticles data={data} isLoading={loading}/> */}

            {/* <ArticleResume data={landingData?.articuloDestacado} isLoading={loading} /> */}

            {/* {false && landingData.secciones && landingData.secciones.map((seccion, index) => (
            <LandingSection
                key={index}
                seccionData={seccion}
                alternative={index % 2 !== 0}
            />
        ))} */}

            {/* {false && categorias.length > 0 && categorias.map((categoria) => (
            categoria.articulos.length > 0 &&
            <RecommendedArticles
                // si articulos es undefined mostramos loading 
                isLoading={categoria.articulos === undefined}
                key={categoria.id}
                title={categoria.nombre}
                data={categoria.articulos}
            />
        ))} */}

            {/* {false && categorias.some(c => c.articulos === undefined) && (
            <RecommendedArticles
                isLoading={true}
                title="Cargando categorías..."
                data={[]}
            />
        )} */}

            {/* <VideoSection sectionTitle={'Carrusel de videos'} videos={videos}/> */}
        </>
    )
}
export default Home;