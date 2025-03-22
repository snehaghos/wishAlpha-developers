import { useState } from "react";
import LoginContext from "./LoginContext";

export default function LoginContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <LoginContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </LoginContext.Provider>
  );
}
