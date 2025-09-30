import { Link } from "react-router-dom";
import "../styles/App.css";

function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Página não encontrada.</p>
            <Link to="/" className="btn-home">
                Voltar para Home
            </Link>
        </div>
    );
}

export default NotFound;
