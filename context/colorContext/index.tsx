"use client";

import React, { createContext, useContext, useState } from "react";

interface Colors {
  bodyColor: string;
  beekColor: string;
  eyeColor: string;
  backgroundColor: string;
}

interface ColorContextType {
  colors: Colors;
  setColor: (key: keyof Colors, value: string) => void;
}

// Default color values
const initialColors: Colors = {
  bodyColor: "#010138",
  beekColor: "#000000",
  eyeColor: "#ffffff",
  backgroundColor: "#23263a",
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colors, setColors] = useState<Colors>(initialColors);

  const setColor = (key: keyof Colors, value: string) => {
    setColors((prevColors) => ({ ...prevColors, [key]: value }));
  };

  return (
    <ColorContext.Provider value={{ colors, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};
