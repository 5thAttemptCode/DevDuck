import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useColor } from '@/context/colorContext'


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
  const { colors } = useColor()
  const { bodyColor, beekColor, eyeColor } = colors
  const roughness = 0.6
 
  return (
    <group {...props} dispose={null}>
      {/* Body */}
      <mesh 
        geometry={nodes.Body.geometry} 
        position={[0, 0.664, 0]} 
        scale={[1, 0.643, 2.043]}
      >
        <meshStandardMaterial 
          color={bodyColor} 
          roughness={roughness} 
        />
      </mesh>

      {/* upper and lower beek */}
      <mesh 
        geometry={nodes.BeekUpper.geometry} 
        material={nodes.BeekUpper.material} 
        position={[0, 1.948, 1.574]} 
        scale={[0.823, 1, 0.788]}
      >
        <meshStandardMaterial color={beekColor} />
      </mesh>
      <mesh 
        geometry={nodes.BeekLower.geometry} 
        material={nodes.BeekLower.material} 
        position={[0, 1.859, 1.549]} 
        rotation={[0, 0, Math.PI]} 
        scale={[0.76, 1, 0.788]}
      >
        <meshStandardMaterial color={beekColor} />
      </mesh>

      {/* Wings */}
      <mesh 
        geometry={nodes.Wings.geometry} 
        material={nodes.Wings.material} 
        position={[0.018, 0.826, 0.193]} 
        rotation={[0.18, 0, 0]} 
        scale={[0.602, 0.387, 1.23]}
      >
        <meshStandardMaterial 
          color={bodyColor} 
          roughness={roughness} 
        />
      </mesh>

      {/* Eyes */}
      <mesh 
        geometry={nodes.Eyes.geometry} 
        material={nodes.Eyes.material} 
        position={[0.21, 2.216, 1.47]} 
        rotation={[-0.289, 0.232, 0.068]} 
        scale={[0.081, 0.101, 0.047]}
      >
        <meshStandardMaterial color={eyeColor} />
      </mesh>
    </group>
  )
}