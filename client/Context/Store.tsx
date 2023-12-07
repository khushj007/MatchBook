"use client";
import { useContext, createContext, useState } from "react";

const StoreContext = createContext({
  display: 1,
  setDisplay: (val: number): void => {},
});

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [display, setDisplay] = useState(1);
  return (
    <StoreContext.Provider value={{ display, setDisplay }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => {
  return useContext(StoreContext);
};
