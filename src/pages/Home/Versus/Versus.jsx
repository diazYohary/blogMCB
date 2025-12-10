import styles from './Versus.module.scss'
import { Link } from 'react-router-dom';
import image from '../../../assets/img/Home/Recurso 5.webp';

const Versus=()=>{
    const sampleLinks=[
        {title:'lorem', description:'Donec consequat, risus quis eleifend pellentesque', url:'/article/sample'},
        {title:'lorem', description:'Donec consequat, risus quis eleifend pellentesque', url:'/article/sample'},
        {title:'lorem', description:'Donec consequat, risus quis eleifend pellentesque', url:'/article/sample'},
    ]
    return(
        <section className='mcb-bg-w mcb-pd-30 mcb-flex mcb-gap-40 mcb-jc-c mcb-ai-c mcb_mqm_column'>
            <img className={`${styles.mcb_img} mq_hide`} src={image} alt="MCB family" />
            <div className="mcb-flex-c mcb-gap-20 ">
                <h1 className="mcb-fs-40 mqm-txt-c">Mito vs Realidad</h1>
                {sampleLinks.map((article, index)=>(
                    <Link key={index} to={article.url} className='mcb-no-underline'>
                        <h2 className='mcb-color-b3 mcb-fs-32'>{article.title}</h2>
                        <p className='mcb-color-b4 mcb-fs-20'>{article.description}</p>
                    </Link>
                ))}
            </div>
            <img className={`${styles.mcb_img} ${styles.mcb_mobile_img}`} src={image} alt="MCB family" />
        </section>
    )
}
export default Versus;