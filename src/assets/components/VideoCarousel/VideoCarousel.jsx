import React, {useState, useMemo, useEffect} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './VideoCarousel.module.scss'
import useBreakpoint from './useBreakpoint';
import VideoCard from '../VideoCard/VideoCard'
import YouTubeVideoPlayer from '../YouTubeVideoPlayer/YouTubeVideoPlayer';

const VideoCarousel = ({videoData}) => {
    const [selectedUrl, setSelectedUrl] = useState(null);
    
    const currentBreakpoint = useBreakpoint();
    
    const getSettingsByBreakpoint = (breakpoint) => {
        switch (breakpoint) {
            case 'XL':
                return {
                    slidesToShow: 4,
                };
            case 'LG':
                return {
                    slidesToShow: 3,
                };
            case 'MD':
                return {
                    slidesToShow: 2,
                    dots: true,
                };
            case 'SM':
                return {
                    slidesToShow: 1,
                    dots: true,
                };
            case 'XS':
            default:
                return {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true,
                };
        }
    };
    
    const baseSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        cssEase: "linear"
    };
    
    const currentSettings = useMemo(() => ({
        ...baseSettings,
        ...getSettingsByBreakpoint(currentBreakpoint),
    }), [currentBreakpoint]);

    const sliderKey = currentBreakpoint;

    return (
        <>
        <Slider key={sliderKey} {...currentSettings}  className={styles.mcb_videoCarousel} >
        {videoData.map((i, index)=>
            <VideoCard key={index} videoData={i} onPlay={()=>setSelectedUrl(i?.url)}/>
        )}
        </Slider>
        {selectedUrl && 
            <YouTubeVideoPlayer 
                url={selectedUrl}
                onClose={()=>setSelectedUrl(null)}
            />
        }
        </>
    )
}

export default React.memo(VideoCarousel);
