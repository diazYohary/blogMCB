import styles from './Author.module.scss';
import authorImg from '../../../assets/img/john_doe.png'
const Author=()=>{
    return(
        <section className={`mcb-flex-c mcb-ai-c mcb-txt-c mcb-gap-20 ${styles.mcb_article_author}`}>
            <p className='mcb-fs-32 mcb-fw-5'>Acerca del autor</p>
            <img className={styles.mcb_author_img} src={authorImg} alt="Author photo" />
            <p className="mcb-fs-24">Author name</p>
            <p className={styles.mcb_author_data}>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper nec nisi nec maximus. Aliquam gravida dignissim eros ut tincidunt. Aenean sit amet nisl ante. In tristique efficitur risus, nec fringilla ipsum ullamcorper vel. Sed nulla massa, egestas at sem sed, eleifend facilisis tortor. Integer vitae pretium nisl, iaculis imperdiet eros. In scelerisque nibh tellus, eu luctus nisl mollis sed. Proin eget vestibulum mauris. Cras sed augue ligula. Duis ultrices risus quam, vel tempor leo tincidunt quis. Curabitur augue tellus, mollis nec vestibulum vulputate, sagittis vel justo. Integer varius velit nisl, a suscipit ligula vehicula venenatis. Sed ac luctus eros.

Proin molestie odio leo, in laoreet nisl iaculis nec. Cras at felis a elit ultrices scelerisque quis ac neque. Quisque vestibulum erat quis felis condimentum, tempus dapibus ex gravida. Aliquam euismod aliquam nisl id consequat. Nulla ut blandit ipsum. Donec augue metus, facilisis id purus ut, mollis fringilla ipsum. Nunc ac aliquam ex. Suspendisse potenti. Morbi at consectetur lorem. 
            </p>
        </section>
    )
}
export default Author;