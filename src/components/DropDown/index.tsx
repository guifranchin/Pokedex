import { useState } from "react";
import styles from "./index.module.css";

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState<any>(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const [selected, setSelected] = useState<any>({
    Fire: false,
    Normal: false,
    Electric: false,
    Water: false,
  });

    return (
      <div className={styles.formRadius}>
          <div className={styles.dropdown}>
            <button onClick={toggleDropdown} className={styles.dropdownButton }> <span>Tipo</span> </button>
            {isOpen && (
              <div className={styles.dropdownContent}>
                {Object.keys(selected).map((type) => (
                  <label key={type}>
                    <input
                      type="checkbox"
                      // checked={selected[type]}
                      // onChange={() => toggleSelection(type)}
                    />
                    {type}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    };