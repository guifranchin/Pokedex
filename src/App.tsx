import { Header } from "./components/Header";
import { HomeMenu } from "./components/Pokedex";
import { PokemonContextProvider } from "./context/PokemonContext";
import { DropDownContextProvider } from "./context/DropDownContext";
import { SearchBarContextProvider } from "./context/SearchBarContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { ModalContextProvider } from "./context/Modal";
import { Modal } from "./components/Modal";
import { Legendaries } from "./components/Lengendaries";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/legendaries"
          element={
            <>
              <Header />
              <Legendaries />
            </>
          }
        />
        <Route
          path="/pokedex"
          element={
            <>
              <Header />
              <PokemonContextProvider>
                <DropDownContextProvider>
                  <SearchBarContextProvider>
                    <ModalContextProvider>
                      <HomeMenu />
                      <Modal/>
                    </ModalContextProvider>
                  </SearchBarContextProvider>
                </DropDownContextProvider>
              </PokemonContextProvider>
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
