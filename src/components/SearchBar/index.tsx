import React, { useState } from "react";
import styles from "./index.module.css";


export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<any>("");
  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    
    <form className={styles.form}>
      <input
        type="text"
        placeholder="encuentra tu pokémon..."
        // value={searchTerm}
        // onChange={handleSearchChange}
      />
    </form>
  );
};
