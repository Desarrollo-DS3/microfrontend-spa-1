import { BrowserRouter, Link } from "react-router-dom";
import "./styles.css";

export default function Root(props) {
  return (
    <BrowserRouter>
      <header>
        <div className="top-bar">
          <h1>Mi Sitio Web</h1>
        </div>
        <div className="bottom-bar">
          <Link to="/news" className="nav-button">
            Noticias
          </Link>
          <Link to="/register" className="nav-button">
            Registro
          </Link>
        </div>
      </header>
    </BrowserRouter>
  );
}
