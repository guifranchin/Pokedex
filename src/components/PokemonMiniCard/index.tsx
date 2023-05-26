import styles from "./index.module.css";
import Pokemon from "../../assets/pokemon1.svg"
import MiniPoke from "../../assets/miniPokedex.png"

export const PokemonMiniCard = () => {
  return (
    <div className={styles.card}>
      <img src={Pokemon}/>
      <div className={styles.row}>
        <h6>Mew</h6>
        <img src={MiniPoke} className={styles.miniPoke}/>
      </div>
    </div>
  );
};
