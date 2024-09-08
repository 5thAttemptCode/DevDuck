"use client"

import React, { useEffect, useRef } from 'react'
import { GUI } from 'dat.gui'


interface GuiComponentProps {
  colorOptions: Array<{
    folderName: string
    colorKey: string
    defaultColor: string
    setColor: React.Dispatch<React.SetStateAction<string>>
  }>
}


export function GuiComponent({ colorOptions }: GuiComponentProps) {

  const guiRef = useRef<GUI | null>(null)

  useEffect(() => {
    // Create the GUI only once
    if (!guiRef.current) {
      const gui = new GUI({ autoPlace: false })
      gui.close()
      guiRef.current = gui

      const targetElement = document.getElementById("canvas")
      if (targetElement) {
        const customContainer = document.createElement("div")
        customContainer.classList.add("gui")
        targetElement.appendChild (customContainer)
        guiRef.current.domElement.parentNode?.removeChild(guiRef.current.domElement)
        customContainer.appendChild(guiRef.current.domElement)
      }

      // Add color options to the GUI
      colorOptions.forEach((option) => {
        const folder = gui.addFolder(option.folderName)
        folder.addColor(option, 'defaultColor').onChange((value) => {
          option.setColor(value)
          localStorage.setItem(option.colorKey, value)
        })
      })
    }
  }, [colorOptions])

  return <></>
}