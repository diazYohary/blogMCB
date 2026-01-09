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
    const mcbSocialMedia=[
        {id:'vb', nombre:'linkedin', url:'https://mx.linkedin.com/company/mcbrokers'},
        {id:'vb', nombre:'facebook', url:'https://www.facebook.com/MCBrokersMX'},
        {id:'vb', nombre:'twitter', url:'https://x.com/mcbrokersmx'},
    ];
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
                        <p className='mcb-fs-20'>Visita las redes sociales de MCBrokers</p>
                        
                        <div className={`mcb-flex mcb-gap-20 ${styles.mq_jc}`}>
                            {mcbSocialMedia.map((red)=>(
                                <a href={red.url} key={red.nombre} title={red.nombre} target='_blank'>
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