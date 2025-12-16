import { useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../img/MCBlogo.svg'

const Header=()=>{
    const location=useLocation();
        return(
        <>
        {location.pathname === '/' ? (
            <header className={`${styles.mcb_header_home}`}>
                aaaaaaaaa
            </header>
        ):(
            <header className={`mcb-flex mcb-ai-c mcb-jc-c ${styles.mcb_header}`}>
                <img src={logo} alt="MCBrokers" />
            </header>
        )}
        </>
    )
}
export default Header;