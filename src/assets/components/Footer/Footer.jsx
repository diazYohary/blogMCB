import styles from './Footer.module.scss'
import mcbLogo from '../../img/MCB_footer.svg';
import { Link } from 'react-router-dom';
import { FooterLinks, socialMedia, mobileStores } from './FooterLinks';
import robot from '../../img/Footer/robot.png';

const Footer=()=>{
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0, 
            behavior: 'smooth' 
        });
    };
    return(
        <footer className={`${styles.mcb_footer} mcb-flex-c mcb-gap-20`}>
            <div className={styles.mcb_footer_grid}>
                <div className={`${styles.mcb_main_info} mcb-flex-c mcb-ai-fs mcb-gap-20`}>
                    <Link to='/' onClick={scrollToTop}>
                    <img src={mcbLogo} className={styles.mcb_logo} alt="MCBrokers" />
                    </Link>
                    <h3 className='mcb-color-w mcb-fs-24 mcb-fw-5'>Contáctanos</h3>
                    <a href="tel:+555552030377">55 52 03 03 77</a>
                    <a href="mailto:servicio@mcbrokers.com.mx">servicio@mcbrokers.com.mx</a>
                    <p>
                        Miguel de Cervantes Saavedra 169 | Piso 2, 
                        Granada, Miguel Hidalgo, 11500 Ciudad de México
                    </p>
                </div>

                {FooterLinks.map((section, sectionIndex)=>(
                    <div key={sectionIndex} className='mcb-flex-c mcb-ai-fs mcb-gap-20'>
                        <h3 className='mcb-color-w mcb-fs-24 mcb-fw-5'>{section.title}</h3>
                        {section.links.map((link, linkIndex)=>(
                            <Link key={linkIndex} to={link.url}>{link.subtitle}</Link>
                        ))}
                    </div>
                ))}

                <div className="mcb-flex-c mcb-gap-20 mcb-pos-r">
                    <h3 className='mcb-color-w mcb-fs-24 mcb-fw-5'>{socialMedia.title}</h3>
                    <div className="mcb-flex mcb-gap-20 mcb-ai-c">
                        {socialMedia.links.map((i, index)=>(
                            <a key={index} href={i.url} target='_blank'>
                                <img className={styles.mcb_socialmedia} src={i.icon} alt={i.socialMedia} />
                            </a>
                        ))}
                    </div>

                    {mobileStores.map((store, storeIndex)=>(
                        <a key={storeIndex} href={store.url} className='mcb-w-fc' target='_blank'>
                            <img className={styles.mcb_mobilestore} src={store.src} alt={store.store} />
                        </a>
                    ))}
                    <img src={robot} className={styles.mcb_robot} alt="Robot MCB" />
                </div>
            </div>
            <hr />
            <div className={`mcb-flex mcb-jc-sb mcb-gap-20 ${styles.mcb_legal}`}>
                <p>©2025 MCBrokers. All rights reserved</p>
                <div className="mcb-flex mcb-gap-20">
                    <a href="">Privacy & Policy</a>
                    <a href="">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;