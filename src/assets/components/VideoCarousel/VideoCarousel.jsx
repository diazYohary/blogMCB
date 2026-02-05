import React, {useState, useMemo} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './VideoCarousel.module.scss'
import useBreakpoint from './useBreakpoint';
import VideoCard from '../VideoCard/VideoCard'
import YouTubeVideoPlayer from '../YouTubeVideoPlayer/YouTubeVideoPlayer';

const VideoCarousel = ({videoData}) => {
    console.log('render')
    
    const settings = useMemo(() => ({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        slidesToShow: 4, // Default XL
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1600, // Tus valores de BREAKPOINTS
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 1320,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 850,
                settings: { slidesToShow: 2, dots: true }
            },
            {
                breakpoint: 500,
                settings: { slidesToShow: 1, dots: true, arrows: false }
            }
        ]
    }), []);

    const [selectedUrl, setSelectedUrl] = useState(null)

    return (
        <>
        <Slider {...settings} className={styles.mcb_videoCarousel} >
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
