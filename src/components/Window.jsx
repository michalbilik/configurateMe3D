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
          <color attach="background" args={["#181818"]} />
          <fog attach="fog" args={["#181818", 10, 20]} />
          <Scene />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  );
};

export default Window;
