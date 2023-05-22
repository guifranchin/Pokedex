import React, { useContext, useState } from "react";
import styles from "./index.module.css";
import { DropDownContext } from "../../context/DropDownContext";

type DropDownProps = {
  type: string;
};

export const DropDown = ({ type }: DropDownProps) => {
  const {
    dropDownItems,
    setDropDownItems,
    setSelectedTypes,
    setSelectedAttacks,
    setSelectedExperience,
  } = useContext(DropDownContext);
  const selectedItems = dropDownItems[type] || {};
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleSelection = (item: string) => {
    const newSelectedItems = { ...selectedItems, [item]: !selectedItems[item] };

    setDropDownItems({
      ...dropDownItems,
      [type]: newSelectedItems,
    });

    switch (type) {
      case "Tipo":
        setSelectedTypes(
          Object.keys(newSelectedItems).filter((key) => newSelectedItems[key])
        );
        break;
      case "Ataque":
        setSelectedAttacks(
          Object.keys(newSelectedItems).filter((key) => newSelectedItems[key])
        );
        break;
      case "Experiencia":
        setSelectedExperience(
          Object.keys(newSelectedItems).filter((key) => newSelectedItems[key])
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.formRadius}>
      <div className={styles.dropdown}>
        <button onClick={toggleDropdown} className={styles.dropdownButton}>
          <span>{type}</span>
        </button>
        {isOpen && (
          <div className={styles.dropdownContent}>
            {Object.keys(selectedItems).map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  checked={selectedItems[item]}
                  onChange={() => toggleSelection(item)}
                />
                {item}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
