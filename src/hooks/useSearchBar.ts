import { useContext } from "react";
import { SearchBarContext, SearchBarContextProps } from "../context/SearchBarContext";

const useSearchBarContext = () => {
    const searchBarContext = useContext<SearchBarContextProps>(SearchBarContext);
  
    return searchBarContext;
  };
  
  export default useSearchBarContext;
  