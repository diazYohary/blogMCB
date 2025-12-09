import styles from './Footer.module.scss'
import mcbLogo from '../../img/MCB_footer.svg';
import { Link } from 'react-router-dom';
import { FooterLinks } from './FooterLinks';

const Footer=()=>{
    return(
        <footer className={`${styles.mcb_footer} mcb-flex-c mcb-gap-20`}>
            <div className={styles.mcb_footer_grid}>
                <div className={`${styles.mcb_main_info} mcb-flex-c mcb-ai-fs mcb-gap-20`}>
                    <img src={mcbLogo} className={styles.mcb_logo} alt="MCBrokers" />
                    <h3 className='mcb-color-w mcb-fs-24 mcb-fw-5'>Contáctanos</h3>
                    <a href="tel:+555552030377">55 52 03 03 77</a>
                    <a href="mailto:servicio@mcbrokers.com.mx">servicio@mcbrokers.com.mx</a>
                    <p>
                        Miguel de Cervantes Saavedra 169 | Piso 2,<br />
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
            </div>
            <hr />
            <div className="mcb-flex mcb-jc-sb">
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