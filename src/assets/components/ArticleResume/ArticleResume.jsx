import { Link } from 'react-router-dom';
import styles from './ArticleResume.module.scss';
import sample from '../../img/sample.webp'
import '../../../pages/Home/Home.scss'
import Skeleton from '../Skeletons/Skeleton';
const ArticleResume=({
    data={},
    isLoading=false
})=>{
    const title=data?.titulo || 'Default title';
    const resume=data?.descripcion || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis diam erat, sed feugiat magna ornare at. Nullam ullamcorper volutpat augue in auctor. Cras id felis ultrices enim luctus imperdiet at ac metus. Aenean sagittis mollis enim, sed vestibulum justo posuere eget. Phasellus efficitur, quam tincidunt finibus varius, erat ex fringilla ex, ut consectetur nisl risus et turpis. Pellentesque orci nunc, dictum sit amet iaculis a, vulputate vel ipsum. Donec tristique elit ac blandit egestas. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras at urna ut dolor mollis faucibus at et nulla. Sed fringilla tortor id sem mattis, nec tristique purus placerat. Sed nunc diam, luctus vitae lectus ut, congue mollis arcu. Praesent finibus libero nec quam ornare vehicula. Phasellus ullamcorper iaculis turpis, ullamcorper ornare nunc rhoncus volutpat. Praesent et magna ipsum. Nulla rhoncus libero metus, sed accumsan turpis suscipit eget.';
    const portada=data?.portada?.url || sample;
    const url=data?.slug || ''
    return(
        <article className={`mcb-flex mcb-pd-30 mcb-ai-c mcb-jc-c ${styles.mcb_resume}`}>
            <section className={`mcb-section-cont ${styles.mcb_resume_cont}`}>
                {isLoading ? (
                    <>
                    <div>
                        <Skeleton width="100%" height="100px" className={styles.mcb_resume_img} />
                        <Skeleton width="100%" height="50px" />
                        <Skeleton width="100%" height="40px" />
                    </div>
                    <Skeleton width="100%" height="300px" className={styles.mcb_resume_img} />
                    </>
                ):(
                    <>
                        <div>
                            <h1>{title}</h1>
                            <p>{resume}</p>
                            <Link to={`/article/${url}`} className='mcb-white-link'>Seguir leyendo <span>&#8594;</span> </Link>
                        </div>
                        <img src={portada} className={styles.mcb_resume_img} alt={title} />
                    </>
                )}
            </section>
        </article>
    )
}
export default ArticleResume;