import styles from './LoadingScreen.module.scss'
const LoadingScreen = () => {
    return (
        <div className={styles.loader_cont}>
            <div className={styles.loader}></div>
        </div>
    )
}

export default LoadingScreen