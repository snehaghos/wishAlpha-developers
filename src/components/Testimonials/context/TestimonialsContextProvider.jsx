import TestimonialsContext from "./TestimonialsContext";

const TestimonialsContextProvider = ({ children }) => {
  return (
    <TestimonialsContext.Provider value={{}}>{children}</TestimonialsContext.Provider>
  );
};

export default TestimonialsContextProvider;
