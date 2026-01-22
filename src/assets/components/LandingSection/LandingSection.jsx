import React from 'react'
import styles from './LandingSection.module.scss'
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import useIsMobileDevice from '../../../utils/isMobileDevice';

const SectionImage=({seccionData})=>{
    const tipoVisual = seccionData?.visual?.tipo || 'imagen';
    if(tipoVisual === 'Imagen'){
        return(
            <img 
                className={`${styles.mcb_ls_img}`} 
                src={seccionData?.visual?.imagen?.url || image} 
                alt={seccionData?.titulo} 
            />
        )
    }

    if(tipoVisual === 'Json'){
        return(
            <Lottie
                animationData={seccionData?.visual?.json || null}
                loop={seccionData?.visual?.loop || true}
                autoplay={seccionData?.visual?.autoplay || true}
                className={`${styles.mcb_lottie}`}
                height={200} width={100} 
            />
        )
    }
}

const LandingSection = ({seccionData, alternative}) => {
    const isMobileDevice=useIsMobileDevice();
    
    return (
        <article 
            className={`mcb-flex mcb-jc-c mcb-pd-30`} 
            style={{backgroundColor: seccionData?.estilos?.colorFondo || ''}}
        >
            <section className='mcb-section-cont mcb-flex mcb-ai-c mcb-jc-c mcb-gap-20 imd-col imd-ai-c'>
                {/* LEFT IMAGE */}
                {(!alternative && !isMobileDevice) && <SectionImage seccionData={seccionData}/>}
                
                {/* SECTION DATA */}
                <div className="mcb-flex-c mcb-gap-20 mcb-w-5">
                    {/* SECTION TITLE */}
                    <h2 
                        className='mcb-fs-40 mcb-color-accent mqm-txt-c' 
                        style={{color: seccionData?.estilos?.colorTitulo || ''}}
                    >
                        {seccionData?.titulo}
                    </h2>

                    {/* ARTICLES */}
                    {seccionData?.articulos?.map((article, articleIndex)=>(
                        <Link 
                            key={articleIndex} 
                            to={`/article/${article.slug}`} 
                            className='mcb-no-underline'
                        >
                            <h2 
                                className='mcb-color-b3 mcb-fs-28' 
                                style={{color: seccionData?.estilos?.colorTexto || ''}}
                            >{article.titulo}</h2>
                            <p 
                                className='mcb-color-b4 mcb-fs-18' 
                                style={{color: seccionData?.estilos?.colorTexto || ''}}
                            >{article.subtitulo}</p>
                        </Link>
                    ))}
                </div>
                
                {(!alternative && isMobileDevice) && <SectionImage seccionData={seccionData}/>}
                
                {/* RIGHT IMAGE */}
                {alternative && <SectionImage seccionData={seccionData}/>}
                
            </section>
        </article>
    )
}

export default LandingSection