import { Link } from 'react-router-dom'
import styles from './Prevention.module.scss'
import image from '../../../assets/img/Home/Recurso 4.webp'

const Prevention=(
    // Estos son los parametros que se necesitan, similar a la recepcion de data de subcomoponente de una entrada
    data={},
    isLoading
)=>{
    const title = data?.titulo; //titulo de la seccion
    const sectionImg = data?.img;
    const articles = data?.articles;
    /*  
        articles debe de ser un ARRAY.
        En este se compone por OBJETOS con la estructrura:
        {
            articleTitle:, 
            articleSubtitle:, 
            articleUrl: 
        }
    */
    const titleColor=data?.titleColor;
    const bodyColor=data?.bodyColor;
    const sectionBG = data?.backgroundColor;

    const sampleData=[
        {articleTitle: 'articleTitle', articleSubtitle:'Nunc diam leo, tincidunt quis odio dictum, rutrum congue risus.', articleUrl:'/article/sample'},
        {articleTitle: 'articleTitle', articleSubtitle:'Nunc diam leo, tincidunt quis odio dictum, rutrum congue risus.', articleUrl:'/article/sample'},
        {articleTitle: 'articleTitle', articleSubtitle:'Nunc diam leo, tincidunt quis odio dictum, rutrum congue risus.', articleUrl:'/article/sample'},
    ]
    
    return(
        <section className="mcb-flex mcb-pd-30 mcb-ai-c mcb-jc-c" style={{ backgroundColor: sectionBG || '' }}>
            <div className="mcb-generic-cont mcb-flex-c mcb-gap-20">
                <h2 className="mcb-fs-40 mcb-txt-c" style={{ color: titleColor || '' }}>
                    {title || 'Section title'}
                </h2>

                <div className={`mcb-flex mcb-gap-20 mcb-jc-sb mcb_mqm_column`}>
                    <div className="mcb-flex-c mcb-gap-20">
                        {sampleData.map((i)=>(
                            <Link 
                                key={i?.articleTitle} 
                                to={i?.articleUrl} 
                                className='mcb-no-underline' 
                                style={{ color: bodyColor || '' }}
                            >
                                <h2 className='mcb-color-b3 mcb-fs-32'>{i?.articleTitle}</h2>
                                <p className='mcb-color-b4 mcb-fs-20'>{i?.articleSubtitle}</p>
                            </Link>
                        ))}
                    </div>

                    <img className={`${styles.mcb_prevention_img}`} src={sectionImg || image} alt={title || 'Section title'} />
                </div>
            </div>
        </section>
    )
}
export default Prevention;