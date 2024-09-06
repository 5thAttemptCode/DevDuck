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
        targetElement.appendChild(customContainer)
        customContainer.appendChild(gui.domElement)
      }

      colorOptions.forEach(({ folderName, colorKey, defaultColor, setColor }) => {
        const folder = gui.addFolder(folderName)
        const initialColor = localStorage.getItem(colorKey) || defaultColor
        const colorController = folder.addColor({ color: initialColor }, 'color')

        // Update color without triggering unnecessary re-renders
        colorController.onChange((color: string) => {
          localStorage.setItem(colorKey, color)
          setColor(color)
        })

        folder.open()
      })
    }

    // Cleanup on unmount
    return () => {
      guiRef.current?.destroy()
      guiRef.current = null
    }
  }, []) // Empty dependency array ensures it runs only once

  return null
}