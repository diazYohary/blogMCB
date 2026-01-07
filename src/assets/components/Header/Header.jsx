import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useIsMobileDevice from '../../../utils/isMobileDevice';

import styles from './Header.module.scss';
import logo from '../../img/MCBlogo.svg'
import whiteLogo from '../../img/MCB_footer.svg'
import menu from '../../img/Icons/mobileMenu.svg';
import closeMenu from '../../img/Icons/closeMenu.svg';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

import { HeaderLinks } from './HeaderLinks';

const Header=()=>{
    const isMobile=!useIsMobileDevice();
    const [openMenu, setOpenMenu]=useState(false);

    const handleMenu=()=>{
        setOpenMenu(prev => !prev);
    }

    const location=useLocation();

    useEffect(() => {
        setOpenMenu(false)
    }, [location]);

    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [openMenu]);


    return(
        <header className={`mcb-flex mcb-jc-c ${styles.mcb_header}`}>
            <nav className={`mcb-flex mcb-ai-c mcb-jc-sb ${styles.mcb_header_cont}`}>
                <Link to='/'>
                    <img src={logo} className={styles.mcb_home_logo} alt="MCBrokers" />
                </Link>
                {isMobile ? (
                    <div className={`mcb-flex mcb-gap-30 mcb-ai-c ${styles.mcb_home_menu}`}>
                        <Link to='/' className={`mcb-black-link`}>Inicio</Link>
                        <DropdownMenu title={"Artículos"} 
                        options={
                            <div className='mcb-flex-c'>
                            <Link>Sample</Link>
                            <Link>Sample</Link>
                            <Link>Sample</Link>
                            <Link>Sample</Link>
                            <Link>Sample</Link>
                            </div>
                        }
                        ></DropdownMenu>
                        {HeaderLinks.map((i, index)=>(
                            <Link key={index} to={i.url} className={`mcb-black-link`} target='_blank'>{i.title}</Link>
                        ))}
                    </div>
                ):(
                    <div>
                        <img onClick={handleMenu} className={styles.mcb_menu_icon} style={{filter:'brightness(0)'}} src={menu} alt="Abrir menú" />
                        <div className={`${openMenu===true ? styles.open:''} ${styles.mcb_menu_cont} mcb-flex-c mcb-gap-30`}>
                            <div className="mcb-flex mcb-gap-30 mcb-jc-sb">
                                <p className="mcb-fs-28 mcb-fw-5">Menú</p>
                                <button onClick={handleMenu} className='mcb-no-btn'>
                                    <img src={closeMenu} alt="Cerrar menú" />
                                </button>
                            </div>
                            <Link to='/' className={styles.mcb_mobile_menu_link}>Inicio</Link>
                            {HeaderLinks.map((i, index)=>(
                                <Link key={index} to={i.url} className={styles.mcb_mobile_menu_link}  target='_blank'>{i.title}</Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
export default Header;