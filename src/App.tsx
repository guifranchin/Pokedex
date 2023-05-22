import { useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { HomeMenu } from "./components/HomeMenu";
import { PokemonContextProvider } from "./context/PokemonContext";
import { DropDownContextProvider } from "./context/DropDownContext";
import { SearchBar } from "./components/SearchBar";
import { SearchBarContextProvider } from "./context/SearchBarContext";

function App() {
  return (
    <>
      {/* <Header/>
    <Home /> */}
      <Header />
      <PokemonContextProvider>
        <DropDownContextProvider>
          <SearchBarContextProvider>
            <HomeMenu />
          </SearchBarContextProvider>
        </DropDownContextProvider>
      </PokemonContextProvider>
    </>
  );
}

export default App;
