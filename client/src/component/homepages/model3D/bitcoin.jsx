import { OrbitControls } from "@react-three/drei";
import { BitcoinModel } from "./bitcoinModel";

export const Bitcoin = () => {
  return (
    <>
      <ambientLight intensity={4} />
      <OrbitControls enableZoom={false} />
      <BitcoinModel />
    </>
  );
};
