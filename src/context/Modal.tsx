import { createContext, useState } from "react";

export type ModalContextProps = {
  selectedPokemon: any;
  setSelectedPokemon: React.Dispatch<React.SetStateAction<any>>;
};

type ModalContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUES = {
  selectedPokemon: {},
  setSelectedPokemon: () => [{}],
} as ModalContextProps;

export const ModalContext =
  createContext<ModalContextProps>(DEFAULT_VALUES);

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <ModalContext.Provider
      value={{
        selectedPokemon, setSelectedPokemon
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};