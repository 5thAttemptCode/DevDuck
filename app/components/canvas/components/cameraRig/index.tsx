import { useRef, useEffect, ReactNode } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import * as THREE from 'three'


interface CameraRigProps {
  children: ReactNode
}


export default function CameraRig({ children }: CameraRigProps) {
  const group = useRef<THREE.Group>(null)
  const pointer = useRef<{ x: number, y: number }>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const canvas = document.querySelector('canvas')
      if (!canvas) return
      const canvasRect = canvas.getBoundingClientRect()

      const mouseX = event.clientX - canvasRect.left
      const mouseY = event.clientY - canvasRect.top

      // Calculate the mouse position relative to the canvas
      pointer.current = {
        x: (mouseX / canvasRect.width) * 2 - 1,
        y: -(mouseY / canvasRect.height) * 2 + 1,
      }
    }

    // Listen for mouse move events on the document
    document.addEventListener('mousemove', handleMouseMove)

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useFrame((state, delta) => {
    if (group.current) {
      easing.dampE(
        group.current.rotation,
        [pointer.current.y / 30, pointer.current.x / 5, 0],
        0.85,
        delta
      )
    }
  })

  return <group ref={group}>{children}</group>
}