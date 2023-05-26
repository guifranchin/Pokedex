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
      document.body.style.overflow = 'hidden';
    } else {
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
