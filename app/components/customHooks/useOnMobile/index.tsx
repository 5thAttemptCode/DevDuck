import { useEffect, useState } from 'react'


export default function useOnMobile(): boolean | null {

  const [onMobile, setOnMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setOnMobile(window.innerWidth < 930)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return onMobile
}