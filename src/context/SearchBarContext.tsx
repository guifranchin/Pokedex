import { createContext, useState } from "react";

export type SearchBarContextProps = {
  searchBar: string;
  setSearchBar: React.Dispatch<React.SetStateAction<string>>;
};

type SearchBarContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUES = {
  searchBar: "",
  setSearchBar: () => [],
} as SearchBarContextProps;

export const SearchBarContext =
  createContext<SearchBarContextProps>(DEFAULT_VALUES);

export const SearchBarContextProvider = ({
  children,
}: SearchBarContextProviderProps) => {
  const [searchBar, setSearchBar] = useState<string>("");
  
  return (
    <SearchBarContext.Provider
      value={{
        searchBar,
        setSearchBar,
      }}
    >
      {children}
    </SearchBarContext.Provider>
  );
};
