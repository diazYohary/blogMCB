import styles from './Title.module.scss'
import Breadcrumbs from '../../../assets/components/Breadcrumbs/Breadcrumbs';
import defaultImg from '../../../assets/img/Articles/sampleArticlePreview.png';
import { formatDate } from '../../../utils/api-helpers';

const Title=({
    data:{
        titulo:title,
        // subtitulo:subtitle,
        portada,
        autor:{nombre:author},
        publishedAt:publishDate,
    }
})=>{
    const crumbs=[
        {label:'Blog', url:'/'},
        {label:'Artículo',},
        {label:title, url:'/'},
    ]

    return(
        <div className={` ${styles.mcb_article_title}`}>
            <div className="mcb-pd-30">
                <Breadcrumbs crumbs={crumbs}/>
            </div>
            <div className={styles.mcb_title_grid}>
                <img src={portada?.url || defaultImg} alt="" />
                <div>
                    <h1 className={styles.mcb_title}>{title}</h1>
                    {/* <h2 className={styles.mcb_subtitle}>{subtitle}</h2> */}
                    <p>Escrito por: <b>{author}</b></p>
                    <p>Publicado el: {formatDate(publishDate)}</p>
                </div>
            </div>
        </div>
    )
}
export default Title;