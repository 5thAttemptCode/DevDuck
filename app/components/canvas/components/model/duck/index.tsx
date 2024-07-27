"use client"

import * as THREE from 'three'
import React, { useEffect, useState, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { GUI } from 'dat.gui'


type GLTFAction = THREE.AnimationAction

type GLTFResult = GLTF & {
  nodes: {
    Body: THREE.Mesh
    BeekUpper: THREE.Mesh
    BeekLower: THREE.Mesh
    Wings: THREE.Mesh
    Eyes: THREE.Mesh
  }
  materials: {}
  animations: GLTFAction[]
}


export function Duck(props: JSX.IntrinsicElements['group']) {

  const { nodes } = useGLTF('/duck.gltf') as GLTFResult

  const loadColor = (key: string, defaultColor: string) => {
    return localStorage.getItem(key) || defaultColor
  }

  const [ bodyColor, setBodyColor ] = useState(loadColor("bodyColor", "#0000ff"))
  const [ beekColor, setBeekColor ] = useState(loadColor("beekColor", "#ffa500"))
  const [ eyeColor, setEyeColor ] = useState(loadColor("eyeColor", "#141414"))
  
  const guiRef = useRef<GUI | null>(null)

  const handleColorChange = (key: string, setColor: React.Dispatch<React.SetStateAction<string>>) => (color: string) => {
    localStorage.setItem(key, color)
    setColor(color)
  }

  useEffect(() => {
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

    const bodyFolder = gui.addFolder('Body')
    bodyFolder.addColor({ color: bodyColor }, 'color').onChange(handleColorChange("bodyColor", setBodyColor))
    bodyFolder.open()

    const beekFolder = gui.addFolder('Beek')
    beekFolder.addColor({ color: beekColor }, 'color').onChange(handleColorChange("beekColor", setBeekColor))
    beekFolder.open()

    const eyeFolder = gui.addFolder('Eyes')
    eyeFolder.addColor({ color: eyeColor }, 'color').onChange(handleColorChange("eyeColor", setEyeColor))
    eyeFolder.open()

    return () => {
      gui.destroy()
      guiRef.current = null
    }
  }, [])

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Body.geometry} position={[0, 0.664, 0]} scale={[1, 0.643, 2.043]}>
        <meshStandardMaterial color={bodyColor} />
      </mesh>
      <mesh geometry={nodes.BeekUpper.geometry} material={nodes.BeekUpper.material} position={[0, 1.948, 1.574]} scale={[0.823, 1, 0.788]}>
        <meshStandardMaterial color={beekColor} />
      </mesh>
      <mesh geometry={nodes.BeekLower.geometry} material={nodes.BeekLower.material} position={[0, 1.859, 1.549]} rotation={[0, 0, Math.PI]} scale={[0.76, 1, 0.788]}>
        <meshStandardMaterial color={beekColor} />
      </mesh>
      <mesh geometry={nodes.Wings.geometry} material={nodes.Wings.material} position={[0.018, 0.826, 0.193]} rotation={[0.18, 0, 0]} scale={[0.602, 0.387, 1.23]}>
        <meshStandardMaterial color={bodyColor} />
      </mesh>
      <mesh geometry={nodes.Eyes.geometry} material={nodes.Eyes.material} position={[0.21, 2.216, 1.47]} rotation={[-0.289, 0.232, 0.068]} scale={[0.081, 0.101, 0.047]}>
        <meshStandardMaterial color={eyeColor} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/duck.gltf')
