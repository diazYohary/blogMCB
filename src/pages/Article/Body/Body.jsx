import React, { useRef } from 'react';
import styles from './Body.module.scss';
import {postRenderer} from '../../../utils/post-renderer';
// const SampleTitle=({id})=>(
//     <h2 id={`subsection-${id}`}>Sample subtitle {id}</h2>
// );
// const SampleText=()=>(
//     <p>
//          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper nec nisi nec maximus. Aliquam gravida dignissim eros ut tincidunt. Aenean sit amet nisl ante. In tristique efficitur risus, nec fringilla ipsum ullamcorper vel. Sed nulla massa, egestas at sem sed, eleifend facilisis tortor. Integer vitae pretium nisl, iaculis imperdiet eros. In scelerisque nibh tellus, eu luctus nisl mollis sed. Proin eget vestibulum mauris. Cras sed augue ligula. Duis ultrices risus quam, vel tempor leo tincidunt quis. Curabitur augue tellus, mollis nec vestibulum vulputate, sagittis vel justo. Integer varius velit nisl, a suscipit ligula vehicula venenatis. Sed ac luctus eros.

// Proin molestie odio leo, in laoreet nisl iaculis nec. Cras at felis a elit ultrices scelerisque quis ac neque. Quisque vestibulum erat quis felis condimentum, tempus dapibus ex gravida. Aliquam euismod aliquam nisl id consequat. Nulla ut blandit ipsum. Donec augue metus, facilisis id purus ut, mollis fringilla ipsum. Nunc ac aliquam ex. Suspendisse potenti. Morbi at consectetur lorem. 
//     </p>
// )
const Body=({
    data:{
        contenidos
    }
})=>{
    const contentRef=useRef();

    // buscar todos los textos que tengan contenido.match(/^##\s.+$/gm);
    const sections = contenidos.reduce((acc, content, index) => {
        if(content.__component !== "articulos.bloque-texto") {
            return acc;
        }
        // array de secciones
        const secciones = content.contenido.match(/^##\s.+$/gm);
        if (secciones) {
            secciones.forEach((seccion) => {
                acc.push({
                    id: `subsection-${index}`,
                    title: seccion.replace('## ', ''),
                });
            });
        }
        return acc;
    }, []);

    const handleSection=(e)=>{
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');

        if (contentRef.current && targetId) {
            const targetElement = contentRef.current.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                });
            }
        }
    }
    return(
        <div className={`${styles.mcb_article_body} mcb-gap-30`}>
            <aside className='mcb-card mcb-gap-10 mcb-h-fc'>
                <div>
                    <h2>Tabla de contenido</h2>
                    <hr />
                </div>
                {sections.map((i, index)=>(
                    <a key={index} href={`#${i.title.replace(/\s+/g, '-').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} onClick={handleSection} className='mcb-w-fc'>{i.title}</a>
                ))}
            </aside>
            <article ref={contentRef} className='mcb-flex-c mcb-gap-20'>
                {contenidos.map(postRenderer)}
            </article>
        </div>
    )
}
export default Body;