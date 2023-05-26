import styles from "./index.module.css";
import { PokemonMiniCard } from "../PokemonMiniCard";

export const LegendariesCard = ({type, name, img}: any) => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.divFather}>
        <h6>{type}</h6>
        <div className={styles.line}></div>
        <div className={styles.section}>
          <div>
            <img src={img} />
          </div>
          <div>
            <h1 className={styles.name}>{name}</h1>
            <h5>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat
            </h5>
            <div className={styles.pointsMenu}>
              <div className={styles.pointsSon}>
                <div>
                  <h3>Healthy Points</h3>
                  <span className={styles.points}>1000,000</span>
                  <div className={styles.barPoints}></div>
                </div>
                <div>
                  <h3>Healthy Points</h3>
                  <span className={styles.points}>1000,000</span>
                  <div className={styles.barPoints}></div>
                </div>
                <div>
                  <h3>Healthy Points</h3>
                  <span className={styles.points}>1000,000</span>
                  <div className={styles.barPoints}></div>
                </div>
              </div>
              <div className={styles.pointsSon}>
                <div>
                  <h3>Healthy Points</h3>
                  <span className={styles.points}>1000,000</span>
                  <div className={styles.barPoints}></div>
                </div>
                <div>
                  <h3>Healthy Points</h3>
                  <span className={styles.points}>1000,000</span>
                  <div className={styles.barPoints}></div>
                </div>
                <div>
                  <h3>Healthy Points</h3>
                  <span className={styles.points}>1000,000</span>
                  <div className={styles.barPoints}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.minicards}>
          <PokemonMiniCard/>
          <PokemonMiniCard/>
          <PokemonMiniCard/>
          <PokemonMiniCard/>
          <PokemonMiniCard/>
          <PokemonMiniCard/>
          </div>
        </div>
      </div>
    </section>
  );
};
