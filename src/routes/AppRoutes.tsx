import { Home } from "../components/Home";
import { NotFound } from "../components/NotFound";
import { HomeMenu } from "../components/Pokedex";
import { DropDownContextProvider } from "../context/DropDownContext";
import { PokemonContextProvider } from "../context/PokemonContext";
import { SearchBarContextProvider } from "../context/SearchBarContext";

export const routes = [
    {
      path: "/",
      element: Home,
    },
    {
      path: "/pokedex",
      element: () => (
        <PokemonContextProvider>
          <DropDownContextProvider>
            <SearchBarContextProvider>
              <HomeMenu />
            </SearchBarContextProvider>
          </DropDownContextProvider>
        </PokemonContextProvider>
      ),
    },
    {
      path: "*",
      element: NotFound,
    },
  ];