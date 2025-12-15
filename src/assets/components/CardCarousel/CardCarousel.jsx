import useBreakpoint from './useBreakpoint';
import ArticlePreview from '../ArticlePreview/ArticlePreview';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './CardCarousel.module.scss'

const CardCarousel = ({data}) => {
    const currentBreakpoint = useBreakpoint();
    
    const getSettingsByBreakpoint = (breakpoint) => {
        switch (breakpoint) {
            case 'XL':
                return {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                };
            case 'LG':
                return {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                };
            case 'MD':
                return {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                };
            case 'SM':
                return {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                };
            case 'XS':
            default:
                return {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                };
        }
    };
    
    const baseSettings = {
        dots: true,
        infinite: false,
        speed: 500,
    };

    const currentSettings = {
        ...baseSettings,
        ...getSettingsByBreakpoint(currentBreakpoint),
    };
    
    const sliderKey = currentBreakpoint;

    return (
        <div className={`mcb-flex mcb-jc-c ${styles.mcb_cardCarousel_cont}`}>
            <div className={styles.mcb_cardCarousel}>
                <Slider key={sliderKey} {...currentSettings} className={styles.mcb_carousel_controls}>
                    {data.map((article) => (
                        <ArticlePreview key={article.id} title={article.titulo} date={article.publishedAt} imgSrc={article.portada.url} url={article.slug} />
                    ))}
                    {/* <ArticlePreview/> */}
                </Slider>
            </div>
        </div>
    )
}
export default CardCarousel;