import  { useContext,  } from "react";
import styles from "./index.module.css";
import { SearchBarContext } from "../../context/SearchBarContext";

export const SearchBar = () => {
  const { searchBar, setSearchBar } = useContext(SearchBarContext);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBar(event.target.value);
  };

  return (
    <div className={styles.form}>
      <input
        type="text"
        placeholder="encuentra tu pokémon..."
        value={searchBar}
        onChange={handleSearchChange}
      />
    </div>
  );
};
