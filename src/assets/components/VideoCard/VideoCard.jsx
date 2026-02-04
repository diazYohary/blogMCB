import React from 'react'
import styles from './VideoCard.module.scss'
import defatultVideoPreview from '@/assets/img/Articles/sampleArticlePreview.png'

const PlayButton=()=>(
    <svg className={styles.mcb_play_btn} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.75 36.25L36.25 25L18.75 13.75V36.25ZM25 50C21.5417 50 18.2917 49.3438 15.25 48.0312C12.2083 46.7188 9.5625 44.9375 7.3125 42.6875C5.0625 40.4375 3.28125 37.7917 1.96875 34.75C0.65625 31.7083 0 28.4583 0 25C0 21.5417 0.65625 18.2917 1.96875 15.25C3.28125 12.2083 5.0625 9.5625 7.3125 7.3125C9.5625 5.0625 12.2083 3.28125 15.25 1.96875C18.2917 0.65625 21.5417 0 25 0C28.4583 0 31.7083 0.65625 34.75 1.96875C37.7917 3.28125 40.4375 5.0625 42.6875 7.3125C44.9375 9.5625 46.7188 12.2083 48.0312 15.25C49.3438 18.2917 50 21.5417 50 25C50 28.4583 49.3438 31.7083 48.0312 34.75C46.7188 37.7917 44.9375 40.4375 42.6875 42.6875C40.4375 44.9375 37.7917 46.7188 34.75 48.0312C31.7083 49.3438 28.4583 50 25 50Z" 
    fill="#ffffff"/>
    </svg>
);

const VideoCard = ({
    videoData
}) => {
    return (
        <button className={`mcb-flex-c ${styles.mcb_video_card}`}>
            <div className={styles.mcb_video_preview}>
                <img src={defatultVideoPreview} alt="" />
                <PlayButton/>
            </div>
            <div className={styles.mcb_video_title}>
                <h2 className='mcb-fs-18 mcb-fw-5 mcb-color-b2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque explicabo aliquam libero animi asperiores natus eum rerum error dolor pariatur aliquid odit rem id tempore nemo minus modi, nihil provident?</h2>
            </div>
        </button>
    )
}

export default VideoCard
