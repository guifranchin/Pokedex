import { createContext, useState } from "react";
export type DropDownItems = {
  [type: string]: { [item: string]: boolean };
};

type DropDownContextProps = {
  dropDownItems: DropDownItems;
  setDropDownItems: React.Dispatch<React.SetStateAction<DropDownItems>>;
};

type DropDownContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUES = {
  dropDownItems: {},
  setDropDownItems: () => [],
};

export const DropDownContext = createContext<DropDownContextProps>(
  DEFAULT_VALUES
);

export const DropDownContextProvider = ({
  children,
}: DropDownContextProviderProps) => {
  const [dropDownItems, setDropDownItems] = useState<DropDownItems>({
    Tipo: {
      Fire: false,
      Normal: false,
      Electric: false,
      Water: false,
    },
    Ataque: {
      "Low Attack": false,
      "Medium Attack": false,
      "High Attack": false,
    },
    Experiencia: {
      "Low Experience": false,
      "Medium Experience": false,
      "High Experience": false,
    },
  });

  return (
    <DropDownContext.Provider value={{ dropDownItems, setDropDownItems }}>
      {children}
    </DropDownContext.Provider>
  );
};
