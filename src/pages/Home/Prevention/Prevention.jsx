import { Link } from 'react-router-dom'
import styles from './Prevention.module.scss'
import image from '../../../assets/img/Home/Recurso 4.webp'

const Prevention=()=>{
    const sampleData=[
        {title: 'Sismos', description:'Nunc diam leo, tincidunt quis odio dictum, rutrum congue risus.', url:'/article/sample'},
        {title: 'Inundaciones', description:'Nunc diam leo, tincidunt quis odio dictum, rutrum congue risus.', url:'/article/sample'},
        {title: 'Lorem Ipsum', description:'Nunc diam leo, tincidunt quis odio dictum, rutrum congue risus.', url:'/article/sample'},
    ]
    
    return(
        <section className="mcb-flex mcb-pd-30 mcb-ai-c mcb-jc-c">
            <div className="mcb-generic-cont mcb-flex-c mcb-gap-20">
                <h2 className="mcb-fs-40 mcb-txt-c">La prevención es tu mejor cobertura</h2>
                <div className={`mcb-flex mcb-gap-20 mcb-jc-sb mcb_mqm_column`}>
                    <div className="mcb-flex-c mcb-gap-20">
                        {sampleData.map((article, articleIndex)=>(
                            <Link key={articleIndex} to={article.url} className='mcb-no-underline'>
                                <h2 className='mcb-color-b3 mcb-fs-32'>{article.title}</h2>
                                <p className='mcb-color-b4 mcb-fs-20'>{article.description}</p>
                            </Link>
                        ))}
                    </div>
                    <img className={`${styles.mcb_prevention_img}`} src={image} alt="La prevención es tu mejor cobertura" />
                </div>
            </div>
        </section>
    )
}
export default Prevention;