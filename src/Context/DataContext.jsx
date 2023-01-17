import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [filtrador, setFiltrador] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [notFound, setNotFound] = useState(false);
  const [load, setLoad] = useState(true);
  const getPokemons = async () => {
    try {
      setLoad(true);
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=1155`
      );
      getPokemonData(res.data.results);
      setTimeout(()=>{
        setLoad(false)
      },1000)
    } catch (error) {
      console.log(error);
    }
  };
  const getPokemonData = async (res) => {
    try {
      res.map(async (item) => {
        const result = await axios.get(item.url);
        setPokemons((prevArray) => [...prevArray, result.data]);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const slicer = () => {
    if (filtrador.length == 0) {
      const order = pokemons.sort((a, b) => a.id - b.id);
      return order.slice(currentPage, currentPage + 6);
    } else {
      const filtered = pokemons.filter((n) =>
        n.name.toString().toLowerCase().includes(filtrador.toLowerCase())
      );
      return filtered.slice(currentPage, currentPage + 6);
    }
  };
  const handleChange = (e) => {
    setCurrentPage(0);
    setFiltrador(e.target.value);
  };
  const handleNext = () => {
    if (
      pokemons.filter((n) =>
        n.name.toString().toLowerCase().includes(filtrador.toLowerCase())
      ).length >
      currentPage + 6
    ) {
      setCurrentPage(currentPage + 6);
    }
  };
  const handleBefore = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 6);
    }
  };
  return (
    <DataContext.Provider
      value={{
        load,
        getPokemons,
        slicer,
        handleChange,
        handleNext,
        handleBefore,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
