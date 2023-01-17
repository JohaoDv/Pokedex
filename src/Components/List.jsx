import React, { useContext, useEffect } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "../App.css";
import pokemon from "../assets/pokemon.png";
import pokeball from "../assets/pokeball.png";
import { DataContext } from "../Context/DataContext";
import Pokemon from "./Pokemon";
import Footer from "./Footer";
const List = () => {
  const { getPokemons, handleChange, handleBefore, handleNext, load } =
    useContext(DataContext);
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="container">
      <a className="home" href="/">
        <img src={pokeball} alt="pokeball" />
        <p>Pokémon List</p>
      </a>
      <div className="logo-container">
        <img className="image" src={pokemon} alt="pokemon logo" />
      </div>
      <div className="content-input">
        <input
          onChange={handleChange}
          className="search"
          placeholder="Search Pokémon..."
        />
      </div>
      <div className="buttons">
        <BsFillArrowLeftCircleFill
          onClick={handleBefore}
          className="button-left"
        />
        <BsFillArrowRightCircleFill
          onClick={handleNext}
          className="button-rigth"
        />
      </div>
      <div className="container-pokemon">
        <Pokemon />
      </div>
      <Footer />
    </div>
  );
};

export default List;
