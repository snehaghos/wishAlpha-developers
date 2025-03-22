import { useContext } from "react";
import DevToolsContext from "../DevToolsContext";

const useDevToolsContext = () => {
  return useContext(DevToolsContext);
};

export default useDevToolsContext;
