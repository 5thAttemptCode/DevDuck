import React, { useEffect } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { useColor } from '@/context/colorContext'


export default function BackgroundColor() {

  const { colors } = useColor()
  const { backgroundColor } = colors

  // Get the scene from the useFrame hook
  const scene = useThree((state) => state.scene)

  // Set the background color of the scene
  useEffect(() => {
    if(scene) {
      scene.background = new THREE.Color(backgroundColor)
    }
  }, [ scene, backgroundColor ])

  return ( <color attach="background" args={[ backgroundColor ]} /> )
}