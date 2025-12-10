import styles from './Header.module.scss';
import logo from '../../img/MCBlogo.svg'
const Header=()=>{
    return(
        <header className={`mcb-flex mcb-ai-c mcb-jc-c ${styles.mcb_header}`}>
            <img src={logo} alt="MCBrokers" />
        </header>
    )
}
export default Header;