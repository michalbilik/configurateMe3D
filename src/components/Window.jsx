import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./canvas";
import Configurator from "./Configurator";
import { CustomizationProvider } from "../contexts/Custamization";

const Window = () => {
  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas dpr={[1, 2]}>
          <color attach="background" args={["#8a8383"]} />
          <fog attach="fog" args={["#8a8383", 10, 20]} />
          <Scene />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  );
};

export default Window;
