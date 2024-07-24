"use client"

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'


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
  const { nodes, materials } = useGLTF('/duck.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Body.geometry} material={nodes.Body.material} position={[0, 0.664, 0]} scale={[1, 0.643, 2.043]} />
      <mesh geometry={nodes.BeekUpper.geometry} material={nodes.BeekUpper.material} position={[0, 1.948, 1.574]} scale={[0.823, 1, 0.788]} />
      <mesh geometry={nodes.BeekLower.geometry} material={nodes.BeekLower.material} position={[0, 1.859, 1.549]} rotation={[0, 0, Math.PI]} scale={[0.76, 1, 0.788]} />
      <mesh geometry={nodes.Wings.geometry} material={nodes.Wings.material} position={[0.018, 0.826, 0.193]} rotation={[0.18, 0, 0]} scale={[0.602, 0.387, 1.23]} />
      <mesh geometry={nodes.Eyes.geometry} material={nodes.Eyes.material} position={[0.21, 2.216, 1.47]} rotation={[-0.289, 0.232, 0.068]} scale={[0.081, 0.101, 0.047]} />
    </group>
  )
}

useGLTF.preload('/duck.gltf')
