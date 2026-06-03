import Card from "react-bootstrap/Card";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon, description }) => {

  if (!pokemon) return null;

  return (

    <Card className="pokemon-card">

      <div className="pokemon-id">
        #{pokemon.id}
      </div>

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="pokemon-img"
      />

      <Card.Body>

        <h2 className="pokemon-title">
          ¡Eres {pokemon.name}!
        </h2>

        <p className="pokemon-type">
          Tipo: {pokemon.types[0].type.name}
        </p>

        <p className="pokemon-description">
          {description}
        </p>

      </Card.Body>

    </Card>
  );
};

export default PokemonCard;