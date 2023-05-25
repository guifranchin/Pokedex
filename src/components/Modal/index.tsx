import { useEffect, useContext } from "react";
import { ModalContext } from "../../context/Modal";
import { useMediaQuery } from "react-responsive";
import { ModalPokemonDesktop } from "../ModalPokemonDesktop";
import { ModalPokemonMobile } from "../ModalPokemonMobile";

export const Modal = () => {
  const { selectedPokemon, setSelectedPokemon } = useContext(ModalContext);

  const isDesktop = useMediaQuery({ minDeviceWidth: 768 });
  const isMobile = useMediaQuery({ maxDeviceWidth: 768 });

  useEffect(() => {
    if (selectedPokemon) {
      // Travar o scroll na página quando a modal for aberta no mobile
      document.body.style.overflow = 'hidden';
    } else {
      // Retornar para o valor original quando a modal for fechada ou em desktop
      document.body.style.overflow = 'unset';
    }
  }, [selectedPokemon, isMobile]);


  const onClose = () => {
    setSelectedPokemon(null);
  };

  if (!selectedPokemon) {
    return null;
  }

  return (
    <div>
      {isDesktop && (
        <ModalPokemonDesktop onClose={onClose} pokemon={selectedPokemon} />
      )}
      {isMobile && <ModalPokemonMobile onClose={onClose} pokemon={selectedPokemon} />}
    </div>
  );
};
