"use client"

import styles from './style.module.css'
import { Canvas } from '@react-three/fiber'
import { ReactNode } from 'react'


interface CanvasComponentProps {
  children: ReactNode
}


export default function CanvasComponent({ children }: CanvasComponentProps) {

  return (
    <div className={styles.canvas}>
      <Canvas>
        {children}
      </Canvas>
    </div>
  )
}
