import React, { useCallback, useContext, useMemo, useState } from "react";
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

  const toggleSelection = useCallback((item: string) => {
    setDropDownItems((prevItems) => {
      const newSelectedItems = {
        ...prevItems[type],
        [item]: !prevItems[type][item],
      };
  
      const newDropDownItems = {
        ...prevItems,
        [type]: newSelectedItems,
      };
  
      const selectedKeys = Object.keys(newSelectedItems).filter(
        (key) => newSelectedItems[key]
      );
  
      switch (type) {
        case "Tipo":
          setSelectedTypes(selectedKeys);
          break;
        case "Ataque":
          setSelectedAttacks(selectedKeys);
          break;
        case "Experiencia":
          setSelectedExperience(selectedKeys);
          break;
        default:
          break;
      }
  
      return newDropDownItems;
    });
  }, [setDropDownItems, setSelectedTypes, setSelectedAttacks, setSelectedExperience, type]);

  const content = useMemo(() => {
    return Object.keys(selectedItems).map((item) => (
      <label key={item}>
        <input
          type="checkbox"
          checked={selectedItems[item]}
          onChange={() => toggleSelection(item)}
        />
        {item}
      </label>
    ));
  }, [selectedItems, toggleSelection]);

  return (
    <div className={styles.formRadius}>
      <div className={styles.dropdown}>
        <button onClick={toggleDropdown} className={styles.dropdownButton}>
          <span>{type}</span>
        </button>
        {isOpen && <div className={styles.dropdownContent}>{content}</div>}
      </div>
    </div>
  );
};