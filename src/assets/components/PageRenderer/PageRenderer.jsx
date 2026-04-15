import React from "react";
import RecommendedArticles from "../../../pages/Home/RecommendedArticles/RecommendedArticles";
import CarruselA from "./CarruselArticulos";
import VideoSection from "../../../pages/Home/VideoSection/VideoSection";
import ArticleResume from "../ArticleResume/ArticleResume";
import LandingSection from "../LandingSection/LandingSection";
import HeroSection from "../../../pages/Home/HeroSection/HeroSection";

export default function PageRenderer({ bloque }) {
    switch (bloque.__component) {
        case 'sections.carrusel-articulos':
            return <CarruselA data={bloque} isLoading={false}/>;
        case 'sections.carrusel-videos':
            return <VideoSection videos={bloque.videos} sectionTitle={bloque.titulo}/>;
        case 'sections.articulo-destacado':
            return <ArticleResume data={bloque?.articulo} id={bloque?.articulo?.id}/>;
        case 'sections.seccion-articulos':
            return <LandingSection
                key={bloque.id}
                seccionData={bloque}
            />
        case 'blocks.banner':
            return <HeroSection url={bloque.link} data={bloque.visual} />
        default:
            console.warn(`Componente no reconocido: ${bloque.__component}`);
            return null;
    }
}