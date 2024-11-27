import "./styles.css";
import Card from "./components/Card";

export default function Root(props) {
  return (
    <div className="news-div">
      <h1 className="news-title">Noticias</h1>
      <div className="news-container">
        <Card
          title="El primer articulo"
          description="Este es el primer articulo"
        />
        <Card
          title="El segundo articulo"
          description="Este es el segundo articulo"
        />
        <Card
          title="El tercer articulo"
          description="Este es el tercer articulo"
        />
      </div>
    </div>
  );
}
