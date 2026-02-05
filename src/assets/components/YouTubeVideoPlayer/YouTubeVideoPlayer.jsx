import React, { useRef } from 'react'
import styles from './YouTubeVideoPlayer.module.scss'
import Close from '../../svg/Close'
import useOutsideClick from '@/hooks/useOutsideClick'

const YouTubeVideoPlayer = ({
    url,
    onClose
}) => {
    // ~ EXTRACT VIDEO  ID
    const videoId = url.match(/(?:https?:)?(?:\/\/)?(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/);
    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId?.[1]}?si=UkQRhM8fMmubEMFu&autoplay=1` : null;

    // ~ CLICK OUTSIDE
    const videoPlayerRef = useRef(null);
    useOutsideClick(videoPlayerRef, onClose);

    return (
        <div className={`mcb-flex mcb-ai-c mcb-jc-c ${styles.mcb_videoplayer_cont}`}>
            <button className={`mcb-no-btn ${styles.mcb_videoplayer_close_btn}`} onClick={onClose}>
                <Close />
            </button>
            {embedUrl ? (
                <iframe 
                width="560" height="315" 
                ref={videoPlayerRef} 
                className={styles.mcb_videoplayer} 
                src={embedUrl}
                // title={data?.titulo || 'Default Title'} 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen 
            />
            ):(
                <p className="mcb-mk"> <b>{data?.titulo || 'Default Title'}</b> Url de video mal formada, por favor verifica la URL.</p>
            )}
            
        </div>   
    );
}

export default YouTubeVideoPlayer
