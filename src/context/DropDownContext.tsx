import { createContext, useState } from "react";

type DropDownItem = string;

export type DropDownContextProps = {
  dropDownItems: DropDownItem[];
  setDropDownItems: React.Dispatch<React.SetStateAction<DropDownItem[]>>;
};

type DropDownContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUES = {
  dropDownItems: [],
  setDropDownItems: () => [],
} as DropDownContextProps;

export const DropDownContext =
  createContext<DropDownContextProps>(DEFAULT_VALUES);

export const DropDownContextProvider = ({
  children,
}: DropDownContextProviderProps) => {
  const [dropDownItems, setDropDownItems] = useState<DropDownItem[]>([]);

  return (
    <DropDownContext.Provider value={{ dropDownItems, setDropDownItems }}>
      {children}
    </DropDownContext.Provider>
  );
};

export default DropDownContext;
