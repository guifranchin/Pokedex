import { useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { HomeMenu } from "./components/HomeMenu";
import { PokemonContextProvider } from "./context/PokemonContext";
import { DropDownContextProvider } from "./context/DropDownContext";

function App() {
  return <>
    {/* <Header/>
    <Home /> */}
    <PokemonContextProvider >
      <DropDownContextProvider>
        <Header/>
        <HomeMenu />
      </DropDownContextProvider>
    </PokemonContextProvider>
  </>;
}



export default App;
