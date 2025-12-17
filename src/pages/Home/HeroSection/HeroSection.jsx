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
        <section className={`mcb-pos-r ${styles.pale_blue_bg}`}>
            {isMobile===false ? (
                <div className={`${styles.mcb_hs_title}`}>
                    <h1>Bienvenido</h1>
                    <h1>al Blog de MCBrokers</h1>
                </div>
            ):(
                <div className={`mcb-flex mcb-jc-c ${styles.mcb_hs_title_mobile}`}>
                    <h1>Bienvenido al Blog de MCBrokers</h1>
                </div>
            )}
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
    )
}
export default HeroSection;