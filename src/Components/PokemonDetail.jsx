import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import pokeball from "../assets/pokeball.png";
import "./Styles/pokemon.css";
const PokemonDetail = () => {
  const { id } = useParams();
  const [number, setNumber] = useState(id);
  const [pokemon, setPokemon] = useState();
  const onlyOnePokemon = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${number}/`
    );
    const data = response.data;
    setPokemon(data);
    console.log(data);
  };
  useEffect(() => {
    onlyOnePokemon();
  }, []);
  return (
    <div className="content">
      <a className="logo" href="/">
        <img src={pokeball} alt="pokeball" />
        <p>Pokémon List</p>
      </a>
      {pokemon && (
        <div className="container-one">
          <div id="card-one">
            <p className="hp">HP {pokemon.stats[0].base_stat}</p>
            <img
              className="card-image"
              src={pokemon.sprites.other["official-artwork"].front_default}
            />
            <h2 className="poke-name">{pokemon.name}</h2>
            <div className="types">
              {pokemon.types.map((type) => {
                const style = type.type.name;
                return <span key={type.slot}>{type.type.name}</span>;
              })}
            </div>
            <ul className="lista">
              <li>
                Attack <span>{pokemon.stats[1].base_stat}</span>
              </li>
              <li>
                Defense <span>{pokemon.stats[2].base_stat}</span>
              </li>
              <li>
                Special-Attack <span>{pokemon.stats[3].base_stat}</span>
              </li>
              <li>
                Special-Defense <span>{pokemon.stats[4].base_stat}</span>
              </li>
              <li>
                Speed <span>{pokemon.stats[5].base_stat}</span>
              </li>
            </ul>
            <a href="/">
              <button className="btn">Go Back</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetail;
