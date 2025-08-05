// src/pages/Home.jsx
import React, { useEffect, useState } from "react";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPokemons = async () => {
    setLoading(true);
    const offset = Math.floor(Math.random() * 120); // 151 máx, pero dejamos margen seguro
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
    const data = await res.json();

    const detailedPromises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      return res.json();
    });

    const detailedPokemons = await Promise.all(detailedPromises);
    setPokemons(detailedPokemons);
    setLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Lista de Pokémon</h1>

      <div className="text-center mb-6">
        <button
          onClick={getPokemons}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
        >
          🔁 Actualizar Pokémon Aleatorios
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Cargando...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {pokemons.map((poke) => (
            <div
              key={poke.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <img
                src={poke.sprites.front_default}
                alt={poke.name}
                className="w-20 h-20 mx-auto"
              />
              <h3 className="mt-3 text-lg font-semibold capitalize">{poke.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
