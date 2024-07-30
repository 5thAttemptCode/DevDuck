import { Environment, Lightformer } from '@react-three/drei'


export default function Lights() {

  return (
    <>
      <ambientLight />
      <directionalLight position-z={3} intensity={1} />
      <Environment resolution={256}>
        <group >
          <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, 9]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
        </group>
      </Environment>
    </>
  )
}
