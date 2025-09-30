import { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";
import "../styles/Home.css";

function Home() {
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState(""); // filtro de status
    const [gender, setGender] = useState(""); // filtro de gênero
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then((response) => {
                setCharacters(response.data.results);
                setTotalPages(response.data.info.pages);
            })
            .catch((error) => console.error(error));
    }, [page]);

    const filteredCharacters = characters.filter((char) => {
        return (
            char.name.toLowerCase().includes(search.toLowerCase()) &&
            (status ? char.status.toLowerCase() === status.toLowerCase() : true) &&
            (gender ? char.gender.toLowerCase() === gender.toLowerCase() : true)
        );
    });

    return (
        <div className="home">
            <h2>Rick and Morty Characters</h2>

            {}
            <input
                type="text"
                placeholder="Buscar personagem..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {}
            <div className="filters">
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="">Todos os Status</option>
                    <option value="alive">Vivo</option>
                    <option value="dead">Morto</option>
                    <option value="unknown">Desconhecido</option>
                </select>

                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Todos os Gêneros</option>
                    <option value="male">Masculino</option>
                    <option value="female">Feminino</option>
                    <option value="genderless">Sem Gênero</option>
                    <option value="unknown">Desconhecido</option>
                </select>
            </div>

            {}
            <div className="character-grid">
                {filteredCharacters.map((char) => (
                    <CharacterCard key={char.id} character={char} />
                ))}
            </div>

            {}
            <div className="pagination">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                >
                    ◀ Anterior
                </button>

                <span>Página {page} de {totalPages}</span>

                <button
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                >
                    Próxima ▶
                </button>
            </div>
        </div>
    );
}

export default Home;
