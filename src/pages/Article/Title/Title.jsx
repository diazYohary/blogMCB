import styles from './Title.module.scss'
import Breadcrumbs from '../../../assets/components/Breadcrumbs/Breadcrumbs';
import defaultImg from '../../../assets/img/Articles/sampleArticlePreview.png';
import { formatDate } from '../../../utils/api-helpers';
import Skeleton from '../../../assets/components/Skeletons/Skeleton';

const Title=({
    data={},
    isLoading
})=>{
    const title = data?.titulo;
    const subtitle= data?.subtitulo;
    const portada = data?.portada;
    const author = data.autor?.nombre;
    const publishDate = data?.publishedAt;
    
    return(
        <div className={` ${styles.mcb_article_title}`}>
            <div className={styles.mcb_title_grid}>
                {isLoading ? (
                    <Skeleton height='300px' width='100%'/>
                ):(
                    <img src={portada?.url || defaultImg} alt="" />
                )}
                <div className='mcb-pd-30'>
                    {isLoading ? (
                        <>
                        <Skeleton height='4rem' className={styles.mcb_title}/>
                        <Skeleton height='3rem' width='80%' className={styles.mcb_title}/>
                        <Skeleton height='2rem' width='80%'/>
                        </>
                    ):(<>
                        <h1 className={styles.mcb_title}>{title}</h1>
                        {subtitle && (
                            <h2 className={styles.mcb_subtitle}>{subtitle}</h2>
                        )}
                        {/* <h2 className={styles.mcb_subtitle}>subbbbbbbbb</h2> */}
                        <div className={`mcb-flex mcb-gap-40 ${styles.toColumn}`}>
                            <div>
                                <p className='mcb-color-w9'>Escrito por:</p>
                                <p className='mcb-fs-20'>{author}</p>
                            </div>
                            <div>
                                <p className='mcb-color-w9'>Publicado el:</p>
                                <p className='mcb-fs-20'>{formatDate(publishDate)}</p>
                            </div>
                        </div>
                    
                    </>)}
                </div>
            </div>
        </div>
    )
}
export default Title;