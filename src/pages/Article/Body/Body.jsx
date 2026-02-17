import React, { useRef } from 'react';
import styles from './Body.module.scss';
import {postRenderer} from '../../../utils/post-renderer';
import PDFViewer from '../../../assets/components/PDFViewer/PDFViewer';
const Body=({
    data:{
        contenidos
    }
})=>{
    const contentRef=useRef();

    // buscar todos los textos que tengan contenido.match(/^##\s.+$/gm);
    // const sections = contenidos.reduce((acc, content, index) => {
    //     if(content.__component !== "articulos.bloque-texto") {
    //         return acc;
    //     }
    //     // array de secciones
    //     const secciones = content.contenido.match(/^##\s.+$/gm);
    //     if (secciones) {
    //         secciones.forEach((seccion) => {
    //             acc.push({
    //                 id: `subsection-${index}`,
    //                 title: seccion.replace('## ', ''),
    //             });
    //         });
    //     }
    //     return acc;
    // }, []);

    // const handleSection=(e)=>{
    //     e.preventDefault();
    //     const targetId = e.currentTarget.getAttribute('href');

    //     if (contentRef.current && targetId) {
    //         const targetElement = contentRef.current.querySelector(targetId);
    //         if (targetElement) {
    //             targetElement.scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start',
    //             });
    //         }
    //     }
    // }
    return(
        <div className={`${styles.mcb_article_body} mcb-flex-c mcb-ai-c`}>
            {/* <aside className='mcb-card mcb-gap-10 mcb-h-fc'>
                <div>
                    <h2 className='mcb-fs-24'>Tabla de contenido</h2>
                    <hr />
                </div>
                {sections.map((i, index)=>(
                    <a key={index} href={`#${i.title.replace(/\s+/g, '-').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} onClick={handleSection} className='mcb-w-fc'>{i.title}</a>
                ))}
            </aside> */}
            <article ref={contentRef} className={`mcb-card ${styles.mcb_article_cont}`}>
                {contenidos.map(postRenderer)}
            </article>
            {/* <PDFViewer url={'https://www.uv.es/fragar/html/pdf/html11.pdf'}/> */}
        </div>
    )
}
export default Body;