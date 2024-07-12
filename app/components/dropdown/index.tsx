import React, { useEffect, useRef, useState, ReactNode } from 'react'
import styles from './style.module.css'


interface DropdownMenuProps {
  buttonContent: ReactNode
  children: ReactNode
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ buttonContent, children }) => {

  const dropdownRef = useRef<HTMLDivElement>(null)
  const [menuVisible, setMenuVisible] = useState(false)

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setMenuVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

//   const handleSelection = () => {
//     setMenuVisible(false);
//   };

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