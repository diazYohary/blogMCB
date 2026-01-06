import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import styles from './HeroSection.module.scss'
import animationDesktop from '../../../assets/animations/Home/HeroSection.json'
import animationMobile from '../../../assets/animations/Home/HeroSectionMobile.json'

const HeroSection=()=>{
    const [isMobile, setIsMobile]=useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 950);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);

        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    const heroSectionAnimation = isMobile ? animationMobile : animationDesktop;

    return(
        // ~ SE DEBE DE DEFINIR EN STRAPPI PARA PODER HACER QUE CAMBIE EL TITLE
        <>
        <section className={`mcb-flex mcb-ai-c mcb-jc-c ${styles.mcb_title_cont}`}>
            <h1 className={`${styles.mcb_hs_title}`}>Ideas y consejos para proteger lo que más amas.</h1>
        </section>
        <section className={`mcb-pos-r ${styles.pale_blue_bg}`}>
            <Lottie
                animationData={heroSectionAnimation}
                loop={true}
                autoplay={true}
                style={{
                    width: "100%",
                    top: 0,
                    zIndex: -1,
                }}
            />
        </section>
        </>
    )
}
export default HeroSection;