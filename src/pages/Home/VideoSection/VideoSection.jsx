import React from 'react'
import VideoCarousel from '../../../assets/components/VideoCarousel/VideoCarousel'
const VideoSection = ({sectionTitle,videos}) => {
    return (
        <section className="mcb-flex mcb-pd-30 mcb-ai-c mcb-jc-c">
            <div className="mcb-section-cont mcb-flex-c mcb-gap-20">
                <h2 className="mcb-fs-32 mqm-txt-c">{sectionTitle || 'Video section'}</h2>
                <div className="mcb-flex mcb-jc-c">
                    <VideoCarousel videoData={videos}/>
                </div>
            </div>
        </section>
    )
}

export default VideoSection
