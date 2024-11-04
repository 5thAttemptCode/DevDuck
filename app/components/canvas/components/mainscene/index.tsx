"use client"

import BackgroundColor from "../backgroundColor"
import CameraRig from "../cameraRig"
import Lights from "../lights"
import { Center, ContactShadows, PresentationControls } from "@react-three/drei"
import { Duck } from "../model/duck"
import { GuiComponent } from "../gui"


export default function MainScene() {

  return (
    <>
      <BackgroundColor />
      <GuiComponent />
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