import { Link } from 'react-router-dom';
import styles from './ABC.module.scss';
import image from '../../../assets/img/Home/ABC.png'
const ABC=()=>{
    const sampleData=[
        {title: 'Lorem Ipsum', description:'Nunc diam leo, tincidunt quis odio dictum, rutrum congue risus.', url:'/article/sample'},
        {title: 'Lorem Ipsum', description:'Nunc diam leo, tincidunt quis odio dictum, rutrum congue risus.', url:'/article/sample'},
        {title: 'Lorem Ipsum', description:'Nunc diam leo, tincidunt quis odio dictum, rutrum congue risus.', url:'/article/sample'},
    ]
    return(
        <section className={`mcb-flex mcb-jc-c mcb-bg-w ${styles.mcb_wi_pd}`}>
            <div className='mcb-section-cont mcb-flex-c mcb-gap-20 mcb-ai-c'>
                <div className={`mcb-flex mcb-gap-20 ${styles.mcb_mqm_column}`}>
                    <img className={`${styles.mcb_wi_img} ${styles.mcb_mqm_hide}`} src={image} alt="Qué hacer si" />
                    
                    <div className="mcb-flex-c mcb-gap-20">
                        <h2 className='mcb-fs-40 mcb-color-accent mqm-txt-c'>Qué hacer si...</h2>
                        {sampleData.map((article, articleIndex)=>(
                            <Link key={articleIndex} to={article.url} className='mcb-no-underline'>
                                <h2 className='mcb-color-b3 mcb-fs-32'>{article.title}</h2>
                                <p className='mcb-color-b4 mcb-fs-20'>{article.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
                <img className={`${styles.mcb_wi_img} ${styles['mcb-mobile-img']}`} src={image} alt="Qué hacer si" />
            </div>
        </section>
    )
}
export default ABC;