import { useState } from "react";
import DeveloperProfileContext from "./DeveloperProfileContext";

const DeveloperProfileContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const click = (bool) => {
    setOpen(bool);
  };
  return (
    <DeveloperProfileContext.Provider value={{ open, click }}>
      {children}
    </DeveloperProfileContext.Provider>
  );
};

export default DeveloperProfileContextProvider;
