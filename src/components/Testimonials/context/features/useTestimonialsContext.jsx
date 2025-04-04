import { useContext } from "react";
import TestimonialsContext from "../TestimonialsContext";

const useTestimonialsContext = () => {
  return useContext(TestimonialsContext);
};

export default useTestimonialsContext;
