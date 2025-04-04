import { useContext } from "react";
import DeveloperProfileContext from "../DeveloperProfileContext";

const useDeveloperProfileContext = () => {
  return useContext(DeveloperProfileContext);
};

export default useDeveloperProfileContext;
