import React, { useRef, useState, ReactNode } from 'react'
import styles from './style.module.css'
import useClickOutside from '../customHooks/useClickOutside'


interface DropdownMenuProps {
  buttonContent: ReactNode
  children: ReactNode
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ buttonContent, children }) => {

  const dropdownRef = useRef<HTMLDivElement>(null)
  const [ menuVisible, setMenuVisible ] = useState(false)

  useClickOutside(dropdownRef, () => setMenuVisible(false))

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button onClick={() => setMenuVisible(!menuVisible)}>
        {buttonContent}
      </button>
      <div className={styles.dropdownMenu} style={{ display: menuVisible ? 'flex' : 'none' }}>
        {children}
      </div>
    </div>
  )
}

export default DropdownMenu