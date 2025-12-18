import styles from './Author.module.scss';
import JohnDoe from '../../../assets/img/john_doe.png'
import Facebook from '../../../assets/img/SocialMedia/fb_blue.svg';
import Linkedin from '../../../assets/img/SocialMedia/linkedin_blue.svg';
import Twitter from '../../../assets/img/SocialMedia/x_blue.svg';

const Author=({
    data={},
})=>{
    const authorName= data?.autor?.nombre || 'John Doe';
    const authorAvatar= data?.autor?.avatar?.url || JohnDoe;
    const authorBio=data?.autor?.biografia || 'Sample text';
    const authorSocialMedia=data?.autor?.redesSociales || [];

    const socialMedia=(name)=>{
        switch(name.toLowerCase()){
            case 'linkedin':
                return Linkedin;
            case 'facebook':
                return Facebook;
            case 'twitter':
                return Twitter;
        }
    }
    return(
        <section className={`mcb-flex mcb-ai-c mcb-jc-c ${styles.mcb_article_author}`}>
            <div>
                <h1 className='mcb-fs-32 mcb-fw-5 mcb-txt-c'>Acerca del autor</h1>
                <div className={`mcb-flex mcb-gap-30 ${styles.mq_c}`}>
                    <img className={styles.mcb_author_img} src={authorAvatar} alt={authorName} />
                    <div className={styles.mcb_author_data}>
                        <p className="mcb-fs-24 mcb-fw-5">{authorName}</p>
                        <p>{authorBio}</p>
                        <div className={`mcb-flex mcb-gap-20 ${styles.mq_jc}`}>
                            {authorSocialMedia.map((red)=>(
                                <a href={red.url} key={red.nombre}>
                                    <img src={socialMedia(red.nombre)} className={styles.mcb_author_sm} alt={red.nombre} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Author;