import React, { useContext, useState } from "react";
import styles from "./index.module.css";
import { DropDownContext } from "../../context/DropDownContext";

type DropDownProps = {
  type: string;
};

export const DropDown = ({ type }: DropDownProps) => {
  const { dropDownItems, setDropDownItems } = useContext(DropDownContext);
  const selectedItems = dropDownItems[type] || {};
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleSelection = (item: string) =>
    setDropDownItems({
      ...dropDownItems,
      [type]: { ...selectedItems, [item]: !selectedItems[item] },
    });

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
