import React from 'react'
import styles from './CustomerService.module.scss'
import sofia from '../../../assets/img/Articles/customerService.png'
const CustomerService = () => {
    return (
        <article className='mcb-flex mcb-jc-c mcb-bg-w mcb-pd-30'>
            <section className='mcb-section-cont mcb-flex mcb-ai-c mcb-jc-c mcb-gap-30 mqm-col'>
                <img className={styles.img} src={sofia} alt="¿Quieres contratar tu protección?" />
                <div className='mcb-flex-c mcb-gap-10 mcb-ai-c mcb-txt-c'>
                    <h2 className='mcb-fs-32'>¿Quieres contratar tu protección?</h2>
                    <p className='mcb-color-primmary mcb-fs-20'>¡Yo te ayudo!</p>
                    <a className='mcb-green-btn mcb-fs-18'>¡Haz click aquí!</a>
                </div>
            </section>
        </article>
    )
}

export default CustomerService
