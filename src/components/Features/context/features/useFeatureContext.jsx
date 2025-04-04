import { useContext } from "react";
import FeatureContext from "../FeatureContext";

const useFeatureContext = () => {
  return useContext(FeatureContext);
};

export default useFeatureContext;
