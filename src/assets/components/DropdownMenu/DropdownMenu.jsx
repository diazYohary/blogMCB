import React, {useState} from 'react'
import { motion } from 'motion/react';
import styles from './DropdownMenu.module.scss'

const DownArrow = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
    </svg>
)

const DropdownMenu = ({title, options}) => {
    const [isOpen, setIsOpen]=useState(false);

    const openMenu = (event) => {
        event.stopPropagation();
        setIsOpen(prev => !prev);
    }
    
    return (
        <div 
            onMouseEnter={()=>setIsOpen(true)} 
            onMouseLeave={()=>setIsOpen(false)}
        >
            <button className={`${styles.mcb_dropdown_trigger} mcb-flex mcb-gap-5 mcb-ai-c ${isOpen ? styles.mcb_dropdown_trigger_open:''}`} 
                onClick={openMenu}
            >
                {title}
                <DownArrow/>
            </button>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring" }}
                    className={`${styles.mcb_dropdown_menu} mcb-flex-c`}
                >
                    {options}
                </motion.div>
            )}

        </div>
    )
}

export default DropdownMenu
