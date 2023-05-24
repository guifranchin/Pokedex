import { Header } from "./components/Header";
import { HomeMenu } from "./components/Pokedex";
import { PokemonContextProvider } from "./context/PokemonContext";
import { DropDownContextProvider } from "./context/DropDownContext";
import { SearchBarContextProvider } from "./context/SearchBarContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";

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
          path="/pokedex"
          element={
            <>
              <Header />
              <PokemonContextProvider>
                <DropDownContextProvider>
                  <SearchBarContextProvider>
                    <HomeMenu />
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
  // return (
  //   <>
  //     {/* <Header/>
  //   <Home /> */}
  //     <Header />
  //     <PokemonContextProvider>
  //       <DropDownContextProvider>
  //         <SearchBarContextProvider>
  //           <HomeMenu />
  //         </SearchBarContextProvider>
  //       </DropDownContextProvider>
  //     </PokemonContextProvider>
  //   </>
  // );
}

export default App;
