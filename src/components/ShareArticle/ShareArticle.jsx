import { useState, useEffect } from "react"
import useIsMobileDevice from '@/utils/isMobileDevice';
import { 
    FacebookShareButton, 
    TwitterShareButton, 
    WhatsappShareButton, 
    LinkedinShareButton
} from "react-share"

import LinkedinIcon from '../../assets/img/SocialMedia/linkedin.svg'
import TwitterIcon from '../../assets/img/SocialMedia/xlogo.svg'
import FacebookIcon from '../../assets/img/SocialMedia/facebook.svg'
import WhatsappIcon from '../../assets/img/SocialMedia/whatsapp.svg'
import styles from './ShareArticle.module.scss'


const ShareIcon = () => (
    <svg width="31" height="34" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.8333 34C24.3981 34 23.1782 33.5042 22.1736 32.5125C21.169 31.5208 20.6667 30.3167 20.6667 28.9C20.6667 28.73 20.7097 28.3333 20.7958 27.71L8.69722 20.74C8.23796 21.165 7.70694 21.4979 7.10417 21.7388C6.50139 21.9796 5.85556 22.1 5.16667 22.1C3.73148 22.1 2.51157 21.6042 1.50694 20.6125C0.502315 19.6208 0 18.4167 0 17C0 15.5833 0.502315 14.3792 1.50694 13.3875C2.51157 12.3958 3.73148 11.9 5.16667 11.9C5.85556 11.9 6.50139 12.0204 7.10417 12.2613C7.70694 12.5021 8.23796 12.835 8.69722 13.26L20.7958 6.29C20.7384 6.09167 20.7025 5.90042 20.6882 5.71625C20.6738 5.53208 20.6667 5.32667 20.6667 5.1C20.6667 3.68333 21.169 2.47917 22.1736 1.4875C23.1782 0.495833 24.3981 0 25.8333 0C27.2685 0 28.4884 0.495833 29.4931 1.4875C30.4977 2.47917 31 3.68333 31 5.1C31 6.51667 30.4977 7.72083 29.4931 8.7125C28.4884 9.70417 27.2685 10.2 25.8333 10.2C25.1444 10.2 24.4986 10.0796 23.8958 9.83875C23.2931 9.59792 22.762 9.265 22.3028 8.84L10.2042 15.81C10.2616 16.0083 10.2975 16.1996 10.3118 16.3838C10.3262 16.5679 10.3333 16.7733 10.3333 17C10.3333 17.2267 10.3262 17.4321 10.3118 17.6163C10.2975 17.8004 10.2616 17.9917 10.2042 18.19L22.3028 25.16C22.762 24.735 23.2931 24.4021 23.8958 24.1613C24.4986 23.9204 25.1444 23.8 25.8333 23.8C27.2685 23.8 28.4884 24.2958 29.4931 25.2875C30.4977 26.2792 31 27.4833 31 28.9C31 30.3167 30.4977 31.5208 29.4931 32.5125C28.4884 33.5042 27.2685 34 25.8333 34ZM25.8333 30.6C26.3213 30.6 26.7303 30.4371 27.0604 30.1113C27.3905 29.7854 27.5556 29.3817 27.5556 28.9C27.5556 28.4183 27.3905 28.0146 27.0604 27.6888C26.7303 27.3629 26.3213 27.2 25.8333 27.2C25.3454 27.2 24.9363 27.3629 24.6063 27.6888C24.2762 28.0146 24.1111 28.4183 24.1111 28.9C24.1111 29.3817 24.2762 29.7854 24.6063 30.1113C24.9363 30.4371 25.3454 30.6 25.8333 30.6ZM5.16667 18.7C5.65463 18.7 6.06366 18.5371 6.39375 18.2113C6.72384 17.8854 6.88889 17.4817 6.88889 17C6.88889 16.5183 6.72384 16.1146 6.39375 15.7888C6.06366 15.4629 5.65463 15.3 5.16667 15.3C4.6787 15.3 4.26968 15.4629 3.93958 15.7888C3.60949 16.1146 3.44444 16.5183 3.44444 17C3.44444 17.4817 3.60949 17.8854 3.93958 18.2113C4.26968 18.5371 4.6787 18.7 5.16667 18.7ZM27.0604 6.31125C27.3905 5.98542 27.5556 5.58167 27.5556 5.1C27.5556 4.61833 27.3905 4.21458 27.0604 3.88875C26.7303 3.56292 26.3213 3.4 25.8333 3.4C25.3454 3.4 24.9363 3.56292 24.6063 3.88875C24.2762 4.21458 24.1111 4.61833 24.1111 5.1C24.1111 5.58167 24.2762 5.98542 24.6063 6.31125C24.9363 6.63708 25.3454 6.8 25.8333 6.8C26.3213 6.8 26.7303 6.63708 27.0604 6.31125Z" 
    fill="#fff"/>
    </svg>
)

const ShareArticle = ({ url = window.location.href, title='MIra'}) => {
    const [canNativeShare, setCanNativeShare] = useState(false);
    const isMobile=useIsMobileDevice();

    useEffect(() => {
        // ~ the browser can share?
        if (navigator.share) {
        setCanNativeShare(true);
        }
    }, []);

    const handleNativeShare = async () => {
        try {
        await navigator.share({ title, url });
        } catch (error) {
        if (error.name !== 'AbortError') console.error('Error sharing:', error);
        }
    };

    if (canNativeShare && isMobile) {
        return (
        <button onClick={handleNativeShare}>
            <ShareIcon/>
        </button>
        );
    }
    
    
    return (
        <div className="mcb-flex-c mcb-ai-c mcb-gap-10">
            <p className="mcb-fs-20">Compartir en:</p>
            <div className="mcb-flex mcb-gap-10">
                <LinkedinShareButton url={url} quote={title}>
                    <img className={styles.mcb_share_btn} src={LinkedinIcon} alt="Linkedin" />
                </LinkedinShareButton>

                <FacebookShareButton url={url} quote={title}>
                    <img className={styles.mcb_share_btn} src={FacebookIcon} alt="Facebook" />
                </FacebookShareButton>

                <WhatsappShareButton url={url} title={title}>
                    <img className={styles.mcb_share_btn} src={WhatsappIcon} alt="Whatsapp" />
                </WhatsappShareButton>
                
                <TwitterShareButton url={url} title={title}>
                    <img className={styles.mcb_share_btn} src={TwitterIcon} alt="Twitter" />
                </TwitterShareButton>
            </div>
        </div>
    );
}
export default ShareArticle