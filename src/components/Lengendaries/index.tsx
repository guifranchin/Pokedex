import { LegendariesCard } from "../LegendariesCard";
import Pokemon1 from "../../assets/pngwing 6.png";
import Pokemon2 from "../../assets/flaraneow.png";
import Pokemon3 from "../../assets/dragonair.png";

export const Legendaries = () => {
  return (
    <>
      <LegendariesCard type={"Legendaries"} name={"MewTo"} img={Pokemon1}/>
      <LegendariesCard type={"Stronger"} name={"Dragonair"} img={Pokemon2}/>
      <LegendariesCard type={"Weaker"} name={"Flareon"} img={Pokemon3}/>
    </>
  );
};
