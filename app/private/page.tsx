"use client"

import CanvasComponent from '../components/canvas'
import styles from "./style.module.css"
import MainScene from '../components/canvas/components/mainscene'
import { XR, createXRStore } from '@react-three/xr'


const store = createXRStore()


export default function PrivatePage() {
  
  return (
    <main className={styles.main}>
      <button className={styles.arButton} onClick={() => store.enterAR()}>Enter AR</button>
      <CanvasComponent backgroundColor={undefined}>
        <XR store={store}></XR>
        <MainScene />
      </CanvasComponent>
    </main>
  )
}