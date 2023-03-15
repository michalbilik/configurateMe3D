import { Canvas } from "@react-three/fiber";
import React from "react";
import Scene from "./canvas/Scene";

const Window = () => {
  return (
    <Canvas dpr={[1, 2]}>
      <color attach="background" args={["#213547"]} />
      <fog attach="fog" args={["#213547", 10, 20]} />
      <Scene />
    </Canvas>
  );
};

export default Window;
