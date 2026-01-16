import { Link } from 'react-router-dom';
import styles from './ABC.module.scss';
import image from '../../../assets/img/Home/ABC.png'
import Lottie from 'lottie-react';

const ABC=({ seccionData })=>{
    const tipoVisual = seccionData?.visual?.tipo || 'imagen';
    // const sampleData={
    //     title:'Qué hacer si...',
    //     articles:[
    //         {title: 'Lorem Ipsum', description:'Nunc diam leo, tincidunt quis odio dictum, rutrum congue risus.', url:'/article/sample'},
    //         {title: 'Lorem Ipsum', description:'Nunc diam leo, tincidunt quis odio dictum, rutrum congue risus.', url:'/article/sample'},
    //         {title: 'Lorem Ipsum', description:'Nunc diam leo, tincidunt quis odio dictum, rutrum congue risus.', url:'/article/sample'},
    //     ],
    //     bgColor: '#FFFFAA',
    //     titleColor: '#000000',
    //     textBodyColor: '#333333'
    // };
    return(
        <section className={`mcb-flex mcb-jc-c mcb-bg-w ${styles.mcb_wi_pd}`} style={{backgroundColor: seccionData?.estilos?.colorFondo || ''}}>
            <div className='mcb-section-cont mcb-flex-c mcb-gap-20 mcb-ai-c'>
                <div className={`mcb-flex mcb-gap-20 ${styles.mcb_mqm_column}`}>
                    {/* En caso de imagen */}
                    {tipoVisual === 'Imagen' && <img className={`${styles.mcb_wi_img} ${styles.mcb_mqm_hide}`} src={seccionData?.visual?.imagen?.url || image} alt="Qué hacer si" />}
                    
                    {/* En caso de json */}
                    {tipoVisual === 'Json' && (
                        <section className={`mcb-pos-r ${styles.pale_blue_bg}`}>
                            <Lottie
                                animationData={seccionData?.visual?.json || null}
                                loop={seccionData?.visual?.loop || true}
                                autoplay={seccionData?.visual?.autoplay || true}
                                style={{
                                    width: "100%",
                                    top: 0,
                                    zIndex: -1,
                                }}
                            />
                        </section>
                    )}
                    <div className="mcb-flex-c mcb-gap-20">
                        <h2 className='mcb-fs-40 mcb-color-accent mqm-txt-c' style={{color: seccionData?.estilos?.colorTitulo || ''}}>{seccionData?.titulo}</h2>
                        {seccionData?.articulos?.map((article, articleIndex)=>(
                            <Link key={articleIndex} to={`/article/${article.slug}`} className='mcb-no-underline'>
                                <h2 className='mcb-color-b3 mcb-fs-32' style={{color: seccionData?.estilos?.colorTitulo || ''}}>{article.titulo}</h2>
                                <p className='mcb-color-b4 mcb-fs-20' style={{color: seccionData?.estilos?.colorTexto || ''}}>{article.subtitulo}</p>
                            </Link>
                        ))}
                    </div>
                </div>
                <img className={`${styles.mcb_wi_img} ${styles['mcb-mobile-img']}`} src={seccionData?.imagen?.url || image} alt="Qué hacer si" />
            </div>
        </section>
    )
}
export default ABC;