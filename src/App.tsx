import { Header } from "./components/Header";
import { HomeMenu } from "./components/Pokedex";
import { PokemonContextProvider } from "./context/PokemonContext";
import { DropDownContextProvider } from "./context/DropDownContext";
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
