import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useLayoutEffect } from "react";

export function BitcoinModel(props) {
  const { nodes, materials } = useGLTF(
    "../../../../public/models/bitcoin_btc_gold_lowpoly.glb"
  );
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      //   meshRef.current.rotation.y += 0.0025;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.7} position={[-1, 1, 0.5]} castShadow />
      <group {...props} dispose={null}>
        <mesh
          ref={meshRef}
          geometry={nodes.C______rculo_B______zier_001_0_1.geometry}
          material={materials.Material_BTC}
          rotation={[-Math.PI / -1.2, 2.8, 1.7]}
          scale={[2.5, 2.5, 2.5]}
          position={[0, 0, 0]}
        />
      </group>
    </>
  );
}

useGLTF.preload("../../../../public/models/bitcoin_btc_gold_lowpoly.glb");
