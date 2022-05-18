import Header from "../../Components/Header/Header";
import MovieCatalogue from "../../Components/MovieCatalogue/MovieCatalogue";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <MovieCatalogue />
    </div>
  );
}
