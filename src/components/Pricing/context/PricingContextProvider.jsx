import PricingContext from "./PricingContext";

const PricingContextProvider = ({ children }) => {
  return (
    <PricingContext.Provider value={{}}>{children}</PricingContext.Provider>
  );
};

export default PricingContextProvider;
