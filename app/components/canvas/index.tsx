"use client"

import styles from './style.module.css'
import { Canvas } from '@react-three/fiber'
import { ReactNode } from 'react'


interface CanvasComponentProps {
  children: ReactNode
}


export default function CanvasComponent({ children }: CanvasComponentProps) {

  return (
    <div id='canvas' className={styles.canvas}>
      <Canvas shadows>
        {children}
      </Canvas>
    </div>
  )
}
