// src/pages/Home.jsx
import React, { useEffect, useState } from "react";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [reloads, setReloads] = useState(0);
  const [loadTime, setLoadTime] = useState(0);

  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);

  const getPokemons = async () => {
    const newOffset = Math.floor(Math.random() * 120);
    setOffset(newOffset);
    setLoading(true);
    const startTime = performance.now();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${newOffset}`);
    const data = await res.json();

    const detailedPromises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      return res.json();
    });

    const detailedPokemons = await Promise.all(detailedPromises);
    setPokemons(detailedPokemons);
    const endTime = performance.now();
    setLoadTime(Math.round(endTime - startTime));
    setLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const buscarPokemon = async () => {
    try {
      setError(null);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      if (!res.ok) throw new Error("Pokémon no encontrado");
      const data = await res.json();
      setSearchResult(data);
    } catch (err) {
      setSearchResult(null);
      setError(err.message);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") buscarPokemon();
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Lista de Pokémon</h1>

      <div className="text-center mb-4">
        <button
          onClick={() => {
            setReloads(reloads + 1);
            getPokemons();
          }}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
        >
          🔁 Actualizar Pokémon Aleatorios
        </button>
      </div>

      <div className="max-w-md mx-auto my-6 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-2 text-center">Buscar Pokémon</h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Nombre o ID"
            className="flex-grow border px-3 py-2 rounded text-black"
          />
          <button
            onClick={buscarPokemon}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Buscar
          </button>
        </div>
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        {searchResult && (
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold capitalize">{searchResult.name}</h3>
            <img
              src={searchResult.sprites.front_default}
              alt={searchResult.name}
              className="w-20 h-20 mx-auto"
            />
            <p className="text-sm text-gray-600">ID: {searchResult.id}</p>
          </div>
        )}
      </div>

      <div className="text-center text-sm text-gray-600 mb-6">
        <p>Pokémon cargados: {pokemons.length}</p>
        <p>Offset usado: {offset}</p>
        <p>Tiempo de carga: {loadTime} ms</p>
        <p>Recargas: {reloads}</p>
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
