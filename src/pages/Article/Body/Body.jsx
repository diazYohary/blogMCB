import React, { useRef } from 'react';
import { motion } from 'motion/react';
import styles from './Body.module.scss';
import { postRenderer } from '../../../utils/post-renderer';
import Skeleton from '../../../assets/components/Skeletons/Skeleton';

const Body=({
    data,
    isLoading
})=>{
    const contentRef=useRef();

    if(isLoading) 
    return(
        <div className={`${styles.mcb_article_body} mcb-flex-c mcb-ai-c`}>
            <article className={`mcb-card ${styles.mcb_article_cont}`}>
                <Skeleton height='1rem' width='100%'/>
                <Skeleton height='1rem' width='100%'/>
                <Skeleton height='1rem' width='100%'/>
                <Skeleton height='1rem' width='100%'/>
                <Skeleton height='1rem' width='100%'/>
                <Skeleton height='1rem' width='100%'/>
                <Skeleton height='200px' width='100%'/>
            </article>
        </div>
    )

    if (!data) {
        return <p>No se encontró contenido.</p>;
    }

    const { contenidos } = data;
    return(
        <motion.div 
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 0.2 }}
            className={`${styles.mcb_article_body} mcb-flex-c mcb-ai-c`}
        >
            <article ref={contentRef} className={`mcb-card ${styles.mcb_article_cont}`}>
                {contenidos.map(postRenderer)}
            </article>
        </motion.div>
    )
}
export default Body;