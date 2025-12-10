import { Link } from "react-router-dom"
import defaultImage from '../../img/Articles/sampleArticlePreview.png'
import styles from './ArticlePreview.module.scss'

const ArticlePreview=({
    title='Default title',
    date='dd/mm/yyyy',
    imgSrc=defaultImage,
    url='/article/sample'
})=>{
    return(
        <Link to={url} className={`mcb-minicard ${styles.mcb_article_preview}`}>
            <img className={styles.mcb_img_preview} src={imgSrc} alt={title} />
            <div>
                <h2 className="mcb-fs-24 mcb-fw-5 mcb-color-b2">{title}</h2>
                <p className="mcb-fs-14 mcb-color-b4">{date}</p>
            </div>
        </Link>
    )
}
export default ArticlePreview