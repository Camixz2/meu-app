import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <header className="header">
        <h1>Rick & Morty App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">Sobre</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
