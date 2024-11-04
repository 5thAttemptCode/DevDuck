import { useEffect, useRef } from 'react'
import { GUI } from 'dat.gui'
import { useColor } from '@/context/colorContext'


export function GuiComponent() {

  const { colors, setColor } = useColor()
  const guiRef = useRef<GUI | null>(null)

  useEffect(() => {
    if (!guiRef.current) {
      const gui = new GUI({ autoPlace: false })
      gui.close()
      guiRef.current = gui

      const targetElement = document.getElementById('canvas')
      if (targetElement) {
        const customContainer = document.createElement('div')
        customContainer.classList.add('gui')
        targetElement.appendChild(customContainer)
        guiRef.current.domElement.parentNode?.removeChild(guiRef.current.domElement)
        customContainer.appendChild(guiRef.current.domElement)
      }

      (Object.keys(colors) as Array<keyof typeof colors>).forEach((colorKey) => {
        gui.addColor(colors, colorKey).onChange((value) => setColor(colorKey, value))
      })
    }
  }, [ colors, setColor ])

  return null
}