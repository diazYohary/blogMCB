import { Link } from 'react-router-dom';
import styles from './WhatIF.module.scss';
import image from '../../../assets/img/Home/Recurso 3.webp'
const WhatIF=()=>{
    const sampleData=[
        {title: 'Lorem Ipsum', description:'Nunc diam leo, tincidunt quis odio dictum, rutrum congue risus.', url:'/article/sample'},
        {title: 'Lorem Ipsum', description:'Nunc diam leo, tincidunt quis odio dictum, rutrum congue risus.', url:'/article/sample'},
        {title: 'Lorem Ipsum', description:'Nunc diam leo, tincidunt quis odio dictum, rutrum congue risus.', url:'/article/sample'},
    ]
    return(
        <section className={`mcb-flex-c mcb-gap-20 mcb-ai-c mcb-bg-w mcb-pt-30`}>
            <h2 className='mcb-txt-c mcb-fs-40 mcb-color-accent'>El ABC</h2>
            <div className={`mcb-flex mcb-gap-20 ${styles.mcb_wi_cont} ${styles.mcb_mqm_column}`}>
                <div>
                    <h3 className='mcb-fs-40 mcb-color-green'>Qué hacer si...</h3>
                    <img className={`${styles.mcb_wi_img} ${styles.mcb_mqm_hide}`} src={image} alt="Qué hacer si" />
                </div>
                <div className="mcb-flex-c mcb-gap-20">
                    {sampleData.map((article, articleIndex)=>(
                        <Link key={articleIndex} to={article.url} className='mcb-no-underline'>
                            <h2 className='mcb-color-b3 mcb-fs-32'>{article.title}</h2>
                            <p className='mcb-color-b4 mcb-fs-20'>{article.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <img className={`${styles.mcb_wi_img} ${styles['mcb-mobile-img']}`} src={image} alt="Qué hacer si" />
                
        </section>
    )
}
export default WhatIF;