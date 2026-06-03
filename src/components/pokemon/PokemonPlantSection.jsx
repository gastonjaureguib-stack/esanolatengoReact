import { useState } from "react";
import PokemonCard from "./PokemonCard";

const plantToPokemon = {
  monstera: "bulbasaur",
  cactus: "sandshrew",
  orquidea: "butterfree",
  ficus: "treecko",
};

// Descripciones personalizadas
const pokemonDescriptions = {
  bulbasaur:
    "Eres una persona tranquila, adaptable y conectada con la naturaleza 🌿",

  sandshrew:
    "Fuerte, resistente y capaz de sobrevivir en cualquier ambiente 🌵",

  butterfree:
    "Creativo, sensible y con una energía libre y elegante ✨",

  treecko:
    "Ágil, relajado y con espíritu selvático 🍃",
};

export default function PokemonPlantSection() {

  const [plant, setPlant] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  const getPokemon = async (plantKey) => {

    const pokemonName = plantToPokemon[plantKey];

    // Si no hay planta seleccionada
    if (!pokemonName) {
      setPokemon(null);
      return;
    }

    setLoading(true);
    setPokemon(null);

    try {

      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );

      const data = await res.json();

      setPokemon(data);

    } catch (err) {

      console.error("Error fetching Pokémon:", err);

    } finally {

      setLoading(false);

    }
  };

  const handleChange = (e) => {

    const value = e.target.value;

    setPlant(value);

    getPokemon(value);
  };

  return (

    <section
      style={{
        padding: "4rem 1rem",
        textAlign: "center",
        background: "#004444",
        color: "#f3e5ab",
      }}
    >

      <h2
        style={{
          marginBottom: "1rem",
          fontWeight: "700",
          fontSize: "2rem",
        }}
      >
        🌿 ¿Qué Pokémon eres según tu planta?
      </h2>

      <p
        style={{
          marginBottom: "2rem",
          opacity: "0.8",
          maxWidth: "600px",
          marginInline: "auto",
        }}
      >
        Descubre qué Pokémon representa mejor tu energía plantil.
      </p>

      <select
        value={plant}
        onChange={handleChange}
        style={{
          padding: "12px 18px",
          borderRadius: "12px",
          border: "2px solid #c19a6b",
          background: "#022f2f",
          color: "#f3e5ab",
          marginBottom: "2rem",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >

        <option value="">Elegí una planta</option>

        <option value="monstera">
          Monstera
        </option>

        <option value="cactus">
          Cactus
        </option>

        <option value="orquidea">
          Orquídea
        </option>

        <option value="ficus">
          Ficus
        </option>

      </select>

      {/* Estado loading */}
      {loading && (
        <p
          style={{
            marginTop: "20px",
            fontSize: "1.1rem",
          }}
        >
          Cargando Pokédex...
        </p>
      )}

      {/* Renderizado de card */}
      {pokemon && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >

          <PokemonCard
            pokemon={pokemon}
            description={pokemonDescriptions[pokemon.name]}
          />

        </div>
      )}

    </section>
  );
}