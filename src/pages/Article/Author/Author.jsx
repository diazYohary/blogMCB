import styles from './Author.module.scss';
import JohnDoe from '../../../assets/img/john_doe.png'
import facebook from '../../../assets/img/SocialMedia/fb_blue.svg';
import linkedin from '../../../assets/img/SocialMedia/linkedin_blue.svg';
import twitter from '../../../assets/img/SocialMedia/x_blue.svg';
import instagram from '../../../assets/img/SocialMedia/instagram_blue.svg';

const Author=({
    data={},
})=>{
    const authorName= data?.autor?.nombre || 'John Doe';
    const authorAvatar= data?.autor?.avatar?.url || JohnDoe;
    const authorBio=data?.autor?.biografia || 'Sample text';
    const mcbSocialMedia=[
        {icon: linkedin,nombre:'linkedin', url:'https://mx.linkedin.com/company/mcbrokers'},
        {icon: instagram,nombre:'instagram', url:'https://www.instagram.com/mcbrokersmexico'},
        {icon: facebook,nombre:'facebook', url:'https://www.facebook.com/MCBrokersMX'},
        {icon: twitter,nombre:'twitter', url:'https://x.com/mcbrokersmx'},
    ];
    
    return(
        <section className={`mcb-flex mcb-ai-c mcb-jc-c ${styles.mcb_article_author}`}>
            <div>
                <h1 className='mcb-fs-32 mcb-fw-6 mcb-txt-c'>Acerca del autor</h1>
                <div className={`mcb-flex mcb-gap-30 ${styles.mq_c}`}>
                    <img className={styles.mcb_author_img} src={authorAvatar} alt={authorName} />
                    <div className={styles.mcb_author_data}>
                        <p className="mcb-fs-24 mcb-fw-5">{authorName}</p>
                        <p>{authorBio}</p>
                        <p className='mcb-fs-20'>Visita las redes sociales de MCBrokers</p>
                        
                        <div className={`mcb-flex mcb-gap-20 ${styles.mq_jc}`}>
                            {mcbSocialMedia.map((i)=>(
                                <a href={i.url} key={i.nombre} title={i.nombre} target='_blank'>
                                    <img src={i.icon} className={styles.mcb_author_sm} alt={i.nombre} />
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