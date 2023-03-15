import { Box } from "@react-three/drei";
import React from "react";
import { BoxCanvas } from "./canvas";

const Window = () => {
  return (
    <div className="bg-slate-800 flex justify-center items-center h-screen">
      <BoxCanvas />
    </div>
  );
};

export default Window;
