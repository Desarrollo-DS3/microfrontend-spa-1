import "./styles.css";

export default function Root(props) {
  const navigateToNews = () => {
    window.location.href = "/news"; // Cambia la URL a /news
  };

  const navigateToRegister = () => {
    window.location.href = "/register"; // Cambia la URL a /register
  };

  return (
    <header>
      <div className="top-bar">
        <h1>Mi Sitio Web</h1>
      </div>
      <div className="bottom-bar">
        <button className="nav-button" onClick={navigateToNews}>
          Noticias
        </button>
        <button className="nav-button" onClick={navigateToRegister}>
          Registro
        </button>
      </div>
    </header>
  );
}
