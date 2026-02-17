import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useIsMobileDevice from '../../../utils/isMobileDevice';

import styles from './Header.module.scss';
import logo from '../../img/MCBlogo.svg'
// import whiteLogo from '../../img/MCB_footer.svg'
import menu from '../../img/Icons/mobileMenu.svg';
import closeMenu from '../../img/Icons/closeMenu.svg';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownMenuMobile from '../DropdownMenuMobile/DropdownMenuMobile';

import { HeaderLinks, productosIndiviual, productosColectiva } from './HeaderLinks';

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
            <div className={`mcb-flex mcb-ai-c mcb-jc-sb ${styles.mcb_header_cont}`}>
                <a href='https://mcbrokers.com.mx/' title='MCBrokers'>
                    <img src={logo} className={styles.mcb_home_logo} alt="MCBrokers" />
                </a>
                {isMobile ? (
                    <nav className={`mcb-flex mcb-gap-30 mcb-ai-c`}>                        
                        {HeaderLinks.map((i, index)=>{
                            if(i.title==='Productos'){
                                return(
                                    <DropdownMenu key={index} title={"Productos"} 
                                    options={
                                        <>
                                        <p>{productosIndiviual.title}</p>
                                        {productosIndiviual.elements.map(e=>
                                            <a href={e.url} key={e.label}>{e.label}</a>
                                        )}
                                        <p>{productosColectiva.title}</p>
                                        {productosColectiva.elements.map(e=>
                                            <a href={e.url} key={e.label}>{e.label}</a>
                                        )}
                                        </>
                                    }
                                    ></DropdownMenu>
                                )
                            }
                            return(
                                <Link key={index} to={i.url} className={`mcb-black-link`} >{i.title}</Link>
                            )
                        })}
                    </nav>
                ):(
                    <div>
                        <img onClick={handleMenu} className={styles.mcb_menu_icon} style={{filter:'brightness(0)'}} src={menu} alt="Abrir menú" />
                        <nav className={`${openMenu===true ? styles.open:''} ${styles.mcb_menu_cont} mcb-flex-c mcb-gap-30`}>
                            <div className="mcb-flex mcb-gap-30 mcb-jc-sb">
                                <p className="mcb-fs-28 mcb-fw-5">Menú</p>
                                <button onClick={handleMenu} className='mcb-no-btn'>
                                    <img src={closeMenu} alt="Cerrar menú" />
                                </button>
                            </div>
                            {HeaderLinks.map((i, index)=>{
                                if(i.title==='Productos'){
                                    return(
                                        <DropdownMenuMobile key={index} title={'Productos'}>
                                            <p>{productosIndiviual.title}</p>
                                            {productosIndiviual.elements.map(e=>
                                                <a href={e.url} key={e.label}>{e.label}</a>
                                            )}
                                            <p>{productosColectiva.title}</p>
                                            {productosColectiva.elements.map(e=>
                                                <a href={e.url} key={e.label}>{e.label}</a>
                                            )}
                                        </DropdownMenuMobile>
                                    )
                                }

                                return(
                                    <Link 
                                        key={index} 
                                        to={i.url} 
                                        className={styles.mcb_mobile_menu_link}
                                    >{i.title}</Link>
                                )
                            })}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
export default Header;