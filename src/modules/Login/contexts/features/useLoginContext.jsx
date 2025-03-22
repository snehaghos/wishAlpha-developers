import { useContext } from "react";
import LoginContext from "../LoginContext";

export function useLoginContext() {
  return useContext(LoginContext);
}
