import { motion } from 'motion/react';
import styles from './Title.module.scss'

import ShareArticle from '../../../components/ShareArticle/ShareArticle';
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
    
    if(isLoading) return(
        <div className={`${styles.mcb_article_title}`}>
            <div className={styles.mcb_title_grid}>
                <Skeleton height='300px' width='100%'/>

                <div className='mcb-pd-30'>
                    <Skeleton height='3rem' width='87%' className={styles.mcb_title}/>
                    <Skeleton height='3rem' width='45%' className={styles.mcb_title}/>
                    <Skeleton height='2rem' width='80%' className={styles.mcb_title}/>
                    <Skeleton height='2rem' width='30%'/>
                </div>
            </div>
        </div>
    )

    return(
        <motion.div 
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 0.2 }}
            className={` ${styles.mcb_article_title}`}
        >
            <div className={styles.mcb_title_grid}>
                <img src={portada?.url || defaultImg} alt="" />
                <div className='mcb-pd-30'>
                    <h1 className={styles.mcb_title}>{title}</h1>
                    {subtitle && (
                        <h2 className={`mcb-fs-24 ${styles.mcb_subtitle}`}>{subtitle}</h2>
                    )}
                    <div className="mcb-flex mcb-gap-20 mcb-jc-sb mqm-col">
                        <div>
                            <p className='mcb-color-w9'>Escrito por:</p>
                            <p className='mcb-fs-20'>{author}</p>
                            <p className='mcb-color-w9'>{formatDate(publishDate)}</p>
                        </div>
                        <ShareArticle/>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Title;