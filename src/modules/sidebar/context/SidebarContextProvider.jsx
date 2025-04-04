import { useState } from "react";

import SidebarContext from "./SidebarContext";

export default function SidebarContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}
