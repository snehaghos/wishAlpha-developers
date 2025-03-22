import DevToolsContext from "./DevToolsContext";

const DevToolsContextProvider = ({ children }) => {
  return (
    <DevToolsContext.Provider value={{}}>{children}</DevToolsContext.Provider>
  );
};

export default DevToolsContextProvider;
