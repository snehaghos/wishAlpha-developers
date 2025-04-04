import FeatureContext from "./FeatureContext";

const FeatureContextProvider = ({ children }) => {
  return (
    <FeatureContext.Provider value={{}}>{children}</FeatureContext.Provider>
  );
};

export default FeatureContextProvider;
