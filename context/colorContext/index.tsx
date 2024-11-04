"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'


interface Colors {
  bodyColor: string
  beekColor: string
  eyeColor: string
  backgroundColor: string
}

interface ColorContextType {
  colors: Colors
  setColor: (key: keyof Colors, value: string) => void
}

const initialColors: Colors = {
  bodyColor: localStorage.getItem("bodyColor") || "#010138",
  beekColor: localStorage.getItem("beekColor") || "#000000",
  eyeColor: localStorage.getItem("eyeColor") || "#ffffff",
  backgroundColor: localStorage.getItem("backgroundColor") || "var(--bg-clr-sec)",
}

const ColorContext = createContext<ColorContextType | undefined>(undefined)


export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [ colors, setColors ] = useState<Colors>(initialColors)

  // Save colors to localStorage when they change
  useEffect(() => {
    Object.entries(colors).forEach(([key, value]) => {
      localStorage.setItem(key, value)
    })
  }, [ colors ])

  const setColor = (key: keyof Colors, value: string) => {
    setColors((prevColors) => ({ ...prevColors, [key]: value }))
  }

  return (
    <ColorContext.Provider value={{ colors, setColor }}>
      {children}
    </ColorContext.Provider>
  )
}

export const useColor = () => {

  const context = useContext(ColorContext)

  if (!context) {
    throw new Error("useColor must be used within a ColorProvider")
  }
  return context
}
