import "../styles/App.css";

function About() {
    return (
        <div className="about">
            <h1>Sobre o Projeto</h1>
            <p>
                Este projeto foi desenvolvido em <strong>React</strong> como parte da
                disciplina <em>Frameworks Web I</em>. A aplicação consome a{" "}
                <strong>Rick and Morty API</strong>, exibindo personagens com filtros,
                busca e detalhes individuais.
            </p>

            <h2>Tecnologias Utilizadas</h2>
            <ul>
                <li> React + Vite</li>
                <li> React Router DOM</li>
                <li> Axios</li>
                <li> CSS </li>
            </ul>
        </div>
    );
}

export default About;
