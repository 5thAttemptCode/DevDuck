"use client"

import { Center, ContactShadows, PresentationControls } from "@react-three/drei"
import CameraRig from "../cameraRig"
import { Duck } from "../model/duck"
import Lights from "../lights"


export default function MainScene() {

  return (
    <>
      <Lights />
      <ContactShadows 
        position={[0, -2, 0]} 
        opacity={0.75} 
        scale={10} 
        blur={2} 
        far={4} 
      />
      <CameraRig>
        <PresentationControls polar={[0, 0]}>
          <Center>
            <Duck 
              scale={1.4} 
            />
          </Center>
        </PresentationControls>
      </CameraRig>
    </>
  )
}