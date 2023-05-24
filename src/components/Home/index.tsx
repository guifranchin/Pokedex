import styles from "./index.module.css";
import Banner from "../../assets/banner.svg";
import BannerComplete from "../../assets/BannerComplete.svg";
import { useMediaQuery } from "react-responsive";
import { Link } from 'react-router-dom';

export const Home = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1476px)" });

  return (
    <section className={styles.sectionContainer}>
      <section className={styles.section}>
        <div className={styles.articleSection}>
          <article className={styles.articleParagraph}>
            <strong>Find</strong> all your favorite <strong>Pokemon</strong>
          </article>
          <h2>
            You can know the type of Pokemon, its strengths, disadvantages and
            abilities{" "}
          </h2>
          <button>
          <Link to="/pokedex">See Pokemons</Link>
          </button>
        </div>
        <img src={ !isTabletOrMobile ?  Banner :  BannerComplete} />
      </section>
      
    </section>
  );
};
