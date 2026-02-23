import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import styles from './HeroSection.module.scss'
import animationDesktop from '../../../assets/animations/Home/HeroSection.json'
import animationMobile from '../../../assets/animations/Home/HeroSectionMobile.json'

const HeroSection = ({ url, data }) => {
    const [isMobile, setIsMobile]=useState(false);
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 950);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);

        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);


    const selectedAnimation = useMemo(() => {
        if (!data?.length) return null;

        const device = isMobile ? 'MOBILE' : 'DESKTOP';
        return data.find(a => a.dispositivo === device) || null;
    }, [data, isMobile]);

    useEffect(() => {
        if (selectedAnimation?.lottie?.url) {
            fetch(selectedAnimation.lottie.url)
                .then(res => res.json())
                .then(setAnimationData)
                .catch(err => console.error('Error loading hero lottie:', err));
        }
    }, [selectedAnimation?.lottie?.url]);

    if (!selectedAnimation || !animationData) {
        const defaultAnimation = isMobile ? animationMobile : animationDesktop;
        return (
            <>
                <section className={`mcb-flex mcb-ai-c mcb-jc-c ${styles.mcb_title_cont}`}>
                    <h1 className={`${styles.mcb_hs_title}`}>Ideas y consejos para proteger lo que más amas.</h1>
                </section>
                <Link to={url?.url} target={url?.newTab ? '_blank' : '_self'} rel={url?.newTab ? 'noopener noreferrer' : undefined} className={`mcb-pos-r ${styles.pale_blue_bg}`}>
                    <Lottie
                        animationData={defaultAnimation}
                        loop={selectedAnimation?.loop ?? true}
                        autoplay={selectedAnimation?.autoplay ?? true}
                        style={{
                            width: '100%',
                            top: 0,
                            zIndex: -1,
                        }}
                    />
                </Link></>
        )

    }

    return (
        <>
            <section className={`mcb-flex mcb-ai-c mcb-jc-c ${styles.mcb_title_cont}`}>
                <h1 className={`${styles.mcb_hs_title}`}>Ideas y consejos para proteger lo que más amas.</h1>
            </section>
        <Link to={url?.url} target={url?.newTab ? '_blank' : '_self'} rel={url?.newTab ? 'noopener noreferrer' : undefined} className={`mcb-pos-r ${styles.pale_blue_bg}`}>
            <Lottie
                animationData={animationData}
                loop={selectedAnimation?.loop ?? true}
                autoplay={selectedAnimation?.autoplay ?? true}
                style={{
                    width: "100%",
                    top: 0,
                    zIndex: -1,
                }}
            />
        </Link>
        </>
    )
}
export default HeroSection;