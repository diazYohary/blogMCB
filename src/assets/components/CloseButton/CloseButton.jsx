import React from 'react'
import styles from './CloseButton.module.scss'

const CloseButton = ({onClose}) => {
    return (
        <button className={styles.mcb_close_btn} type='button' onClick={onClose}>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.50024 21.5C1.6682 21.2091 14.9036 8.04545 21.5002 1.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path d="M21.5002 21.5C21.3323 21.2091 8.09693 8.04545 1.50024 1.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
            </svg>
        </button>
    )
}

export default CloseButton
