import { useContext } from "react";
import { DropDownContext, DropDownContextProps } from "../context/DropDownContext";



const useDropDownContext = () => {
  const dropDownContext = useContext<DropDownContextProps>(DropDownContext);

  return dropDownContext;
};

export default useDropDownContext;
