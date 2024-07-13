"use client"

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFAction = THREE.AnimationAction

type GLTFResult = GLTF & {
  nodes: {
    character_duck: THREE.Mesh
    character_duckArmLeft: THREE.Mesh
    character_duckArmRight: THREE.Mesh
    Cube1338: THREE.Mesh
    Cube1338_1: THREE.Mesh
    Cube1338_2: THREE.Mesh
  }
  materials: {
    ['White.026']: THREE.MeshStandardMaterial
    ['Yellow.043']: THREE.MeshStandardMaterial
    ['Black.027']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/model.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.character_duck.geometry} material={materials['White.026']} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.character_duckArmLeft.geometry} material={materials['White.026']} position={[0.204, 0, -0.634]} />
        <mesh geometry={nodes.character_duckArmRight.geometry} material={materials['White.026']} position={[-0.204, 0, -0.634]} />
        <group position={[0, 0, -0.704]}>
          <mesh geometry={nodes.Cube1338.geometry} material={materials['White.026']} />
          <mesh geometry={nodes.Cube1338_1.geometry} material={materials['Yellow.043']} />
          <mesh geometry={nodes.Cube1338_2.geometry} material={materials['Black.027']} />
        </group>
      </mesh>
    </group>
  )
}

useGLTF.preload('/model.gltf')
