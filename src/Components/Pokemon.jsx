import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import pikachu from "../assets/pikachu.gif";
import CryFound from "../assets/CryFound.png";
const Pokemon = () => {
  const { slicer, load } = useContext(DataContext);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`${id}`);
  };
  return (
    <>
      {load ? (
        <div className="content-load">
          <p>Loading Pokémons...</p>
          <img className="image-load" src={pikachu} />
        </div>
      ) : (
        <>
          {slicer().length === 0 ? (
            <div className="content-found">
              <p>No more Pokémon found</p>
              <img src={CryFound} />
            </div>
          ) : (
            <>
              {slicer().map((pokemon, idx) => {
                return (
                  <div
                    className="card"
                    key={idx}
                    onClick={() => handleClick(pokemon.id)}
                  >
                    <div className="image-pokemon">
                      <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                      />
                    </div>
                    <div className="card-info">
                      <div className="card-top">
                        <h3>{pokemon.name}</h3>
                        <div className="id">{`#${pokemon.id}`}</div>
                      </div>
                      <div className="card-bottom">
                        {pokemon.types.map((type) => {
                          return (
                            <div className="type" key={type.slot}>
                              <div className="image-type">
                                <img src={`/${type.type.name}.png`} />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Pokemon;
