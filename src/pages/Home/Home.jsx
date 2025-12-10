import HeroSection from "./HeroSection/HeroSection";
import RecommendedArticles from "./RecommendedArticles/RecommendedArticles";
import WhatIF from "./WhatIF/WhatIF";
import Prevention from "./Prevention/Prevention";
import Versus from "./Versus/Versus";
import './Home.scss'

const Home=()=>{
    return(
        <>
        <HeroSection/>
        <RecommendedArticles/>
        <WhatIF/>
        <Prevention/>
        <Versus/>
        <RecommendedArticles/>
        </>
    )
}
export default Home;