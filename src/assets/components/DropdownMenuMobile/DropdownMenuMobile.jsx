import React, {useState} from 'react'
import styles from './DropdownMenuMobile.module.scss'
const DropdownMenuMobile = ({
    title,
    children
}) => {
    const [openSubMenu, setOpenSubMenu]=useState(false);
    const handleSubMenu=()=>{ setOpenSubMenu(prev => !prev) }

    return (
        <div>
            <button type='button' onClick={handleSubMenu} className='mcb-fs-18' style={{padding:'unset', color:'var(--black-2)'}}>
                {title || 'Click para desplegar menu'}{openSubMenu ? ('▴'):('▾')}
            </button>
            <nav className={`${styles.mcb_submenu} ${openSubMenu ? styles.open:''}`}>
                {children}
            </nav>
        </div>
    )
}

export default DropdownMenuMobile
