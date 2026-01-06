import { Link } from "react-router-dom"
import defaultImage from '../../img/Articles/sampleArticlePreview.png'
import styles from './ArticlePreview.module.scss'
import { formatDate } from "../../../utils/api-helpers"

const ArticlePreview=({
    title='Default title',
    date='dd/mm/yyyy',
    imgSrc=defaultImage,
    url='/sample'
})=>{
    return(
        <Link to={`/article/${url}`} className={`mcb-minicard ${styles.mcb_article_preview}`}>
            <img className={styles.mcb_img_preview} src={imgSrc} alt={title} />
            <h2 className={`mcb-fs-18 mcb-fw-5 mcb-color-b2 ${styles.mcb_article_title}`}>{title}</h2>
        </Link>
    )
}
export default ArticlePreview