import styles from './Skeletons.module.scss'

const Skeleton=(props)=>{
    const {
        width='100%',
        height='1rem',
        shape='',
        className
    }=props;

    let finalStyles = { width, height };

    if(shape==='circle'){
        
        if(width!=='100%'){
            finalStyles = {
                width: width,
                height: width,
            };
        }else{
            finalStyles = {
                width: "50px",
                height: "50px",
            };
        }
    }

    const shapeClass = shape === 'circle' ? styles.mcb_circle_shape : '';

    return(
        <div className={`${styles.mcb_skeleton} ${shapeClass} ${className}`} style={finalStyles}></div>
    )
}
export default Skeleton