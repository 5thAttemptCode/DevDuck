"use client"

import { Center, Environment, OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import CameraRig from "../cameraRig"
import { Duck } from "../model/duck"


export default function MainScene() {

  const { camera, gl } = useThree()

  return (
    <>
      <ambientLight />
      <OrbitControls enableZoom={false} args={[camera, gl.domElement]} />
      <Environment preset="sunset" />
      <CameraRig>
        <Center>
          <Duck scale={1.4} rotation-x={0.3} />
        </Center>
      </CameraRig>
    </>
  )
}