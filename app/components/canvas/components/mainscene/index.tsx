"use client"

import { Center, OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { Model } from "../model"
import CameraRig from "../cameraRig"


export default function MainScene() {

  const { camera, gl } = useThree()

  return (
    <>
      <ambientLight />
      <OrbitControls enableZoom={false} args={[camera, gl.domElement]} />
      <CameraRig>
        <Center>
          <Model scale={2} />
        </Center>
      </CameraRig>
    </>
  )
}