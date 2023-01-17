import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";
import List from "./Components/List";
import PokemonDetail from "./Components/PokemonDetail";
const App = () => {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/:id" element={<PokemonDetail />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
};

export default App;
