import Skeleton from "./Skeleton";
import styles from '../ArticlePreview/ArticlePreview.module.scss'

const CardSkeleton=()=>{
    return(
        <div className={`mcb-minicard ${styles.mcb_article_preview}`}>
            <Skeleton height='120px'/>
            <Skeleton height='30px'/>
            <Skeleton width='50%'/>
        </div>
    )
}
export default CardSkeleton