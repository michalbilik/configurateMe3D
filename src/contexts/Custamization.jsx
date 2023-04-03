import { createContext, useContext, useState } from "react";

const chairColors = [
  {
    color: "#683434",
    name: "brown",
    price: 50,
  },
  {
    color: "#1a5e1a",
    name: "green",
    price: 60,
  },
  {
    color: "#659994",
    name: "blue",
    price: 60,
  },
  {
    color: "#896599",
    name: "mauve",
    price: 60,
  },
  {
    color: "#ffa500",
    name: "orange",
    price: 60,
  },
  {
    color: "#59555b",
    name: "grey",
    price: 80,
  },
  {
    color: "#222222",
    name: "black",
    price: 80,
  },
  {
    color: "#ececec",
    name: "white",
    price: 80,
  },
];

const cushionColors = [
  {
    color: "#683434",
    name: "brown",
    price: 20,
  },
  {
    color: "#1a5e1a",
    name: "green",
    price: 20,
  },
  {
    color: "#659994",
    name: "blue",
    price: 30,
  },
  {
    color: "#896599",
    name: "mauve",
    price: 30,
  },
  {
    color: "#ffa500",
    name: "orange",
    price: 30,
  },
  {
    color: "#59555b",
    name: "grey",
    price: 40,
  },
  {
    color: "#222222",
    name: "black",
    price: 40,
  },
  {
    color: "#ececec",
    name: "white",
    price: 40,
  },
];

const materialPrices = {
  leather: 100,
  fabric: 50,
};

const legsPrices = {
  1: 40,
  2: 60,
};

const CustomizationContext = createContext({});

export const calculateTotalPrice = (
  material,
  legs,
  chairColor,
  cushionColor
) => {
  const materialPrice = materialPrices[material];
  const legsPrice = legsPrices[legs];
  const chairColorPrice = chairColor.price;
  const cushionColorPrice = cushionColor.price;

  return materialPrice + legsPrice + chairColorPrice + cushionColorPrice;
};

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("leather");
  const [legs, setLegs] = useState(1);
  const [chairColor, setChairColor] = useState(chairColors[0]);
  const [cushionColor, setCushionColor] = useState(cushionColors[0]);

  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        legs,
        setLegs,
        chairColors,
        chairColor,
        setChairColor,
        cushionColors,
        cushionColor,
        setCushionColor,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
