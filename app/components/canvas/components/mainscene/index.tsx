"use client"

import { Center, ContactShadows, Environment, PresentationControls } from "@react-three/drei"
import CameraRig from "../cameraRig"
import { Duck } from "../model/duck"


export default function MainScene() {

  return (
    <>
      <ambientLight />
      <directionalLight position-z={3} intensity={3} />
      <Environment preset="sunset" />
      <ContactShadows 
        position={[0, -2, 0]} 
        opacity={0.75} 
        scale={10} 
        blur={3} 
        far={4} 
      />
      <CameraRig>
        <PresentationControls polar={[0, 0]}>
          <Center>
            <Duck 
              scale={1.4} 
              rotation-x={0.25} 
            />
          </Center>
        </PresentationControls>
      </CameraRig>
    </>
  )
}