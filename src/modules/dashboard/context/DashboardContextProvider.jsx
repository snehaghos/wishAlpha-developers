import { useState } from "react";
import DashboardContext from "./DashboardContext";

export default function DashboardContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <DashboardContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DashboardContext.Provider>
  );
}
