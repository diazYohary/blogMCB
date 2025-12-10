import styles from './HeroSection.module.scss'

const HeroSection=()=>{
    return(
        <section className={` ${styles.mcb_herosection}`}>
            <h1 className='mcb-fs-40'>Bienvenido al blog de MCBrokers</h1>
        </section>
    )
}
export default HeroSection;