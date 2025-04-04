import { useContext } from "react";
import PricingContext from "../PricingContext";

const usePricingContext = () => {
  return useContext(PricingContext);
};

export default usePricingContext;
