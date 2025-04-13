import { useState } from "react";
import { AppContext } from "./AppContext";

export function AppProvider({ children }) {
  const [countAdult, setCountAdult] = useState(0);
  const [countChildren, setCountChildren] = useState(0);
  const [location, setLocation] = useState("");

  return (
    <AppContext.Provider
      value={{
        countAdult,
        setCountAdult,
        countChildren,
        setCountChildren,
        location,
        setLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
