import styles from './Author.module.scss';
import authorImg from '../../../assets/img/john_doe.png'
const Author=({data:{
    autor: { nombre: authorName, avatar: { url: authorAvatar }, biografia: authorBio,
}
}})=>{
    return(
        <section className={`mcb-flex-c mcb-ai-c mcb-txt-c mcb-gap-20 ${styles.mcb_article_author}`}>
            <p className='mcb-fs-32 mcb-fw-5'>Acerca del autor</p>
            <img className={styles.mcb_author_img} src={authorAvatar} alt="Author photo" />
            <p className="mcb-fs-24">{authorName}</p>
            <p className={styles.mcb_author_data}>
                 {authorBio}
            </p>
        </section>
    )
}
export default Author;