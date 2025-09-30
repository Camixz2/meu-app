import { Link } from "react-router-dom";
import "../styles/CharacterCard.css";

function CharacterCard({ character }) {
    return (
        <div className="character-card">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>{character.status} - {character.species}</p>
            <Link to={`/details/${character.id}`} className="details-btn">
                Ver Detalhes
            </Link>
        </div>
    );
}

export default CharacterCard;
