import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Details() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => setCharacter(response.data))
            .catch((error) => console.error(error));
    }, [id]);

    if (!character) {
        return <p>Carregando...</p>;
    }

    return (
        <div className="details">
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p>Status: {character.status}</p>
            <p>Espécie: {character.species}</p>
            <p>Gênero: {character.gender}</p>
            <p>Origem: {character.origin?.name}</p>
            <Link to="/">← Voltar para Home</Link>
        </div>
    );
}

export default Details;
