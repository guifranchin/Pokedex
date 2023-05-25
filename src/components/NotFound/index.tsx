import style from "./index.module.css";
import team from "../../assets/team.png"
import { Link } from "react-router-dom";
export const NotFound = () => {

  return (
    <section className={style.section_container}>
      <p className={style.error}>404</p>
      <div className={style.team}>
        <img src={team}></img>
        <div className={style.alig_container}>
          <div>
            <p className={style.paragrafo}>
              <span>The rocket team </span>has won this time.
            </p>
          </div>
          <div>
            <button className={style.button}>
              <span><Link to="/">Return</Link></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
