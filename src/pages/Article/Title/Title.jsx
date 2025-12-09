import styles from './Title.module.scss'
import Breadcrumbs from '../../../assets/components/Breadcrumbs/Breadcrumbs';
import defaultImg from '../../../assets/img/Articles/sampleArticlePreview.png';

const Title=()=>{
    const crumbs=[
        {label:'Blog', url:'/'},
        {label:'Artículo',},
        {label:'Artículo', url:'/'},
    ]

    return(
        <div className={` ${styles.mcb_article_title}`}>
            <div className="mcb-pd-30">
                <Breadcrumbs crumbs={crumbs}/>
            </div>
            <div className={styles.mcb_title_grid}>
                <img src={defaultImg} alt="" />
                <div>
                    <h1>Default title</h1>
                    <h2>Default subtitle</h2>
                    <p>Escrito por: <b>Author name</b></p>
                    <p>Publicado el: dd/mm/yyyy</p>
                </div>
            </div>
        </div>
    )
}
export default Title;