import { useContext } from "react";
import SidebarContext from "../SidebarContext";


export function useSidebarContext() {
  return useContext(SidebarContext);
}
