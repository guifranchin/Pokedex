import { useContext } from "react";
import { ModalContext, ModalContextProps } from "../context/Modal";

const useModalContext = () => {
    const modalContext = useContext<ModalContextProps>(ModalContext);
  
    return modalContext;
  };
  
  export default useModalContext;
  