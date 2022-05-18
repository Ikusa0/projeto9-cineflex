import "./footer.css";
import MovieCoverSmall from "../MovieCoverSmall/MovieCoverSmall";

export default function Footer({ movieCover, movieTitle }) {
  return (
    <footer className="footer">
      <MovieCoverSmall cover={movieCover} title={movieTitle} />
      <span>{movieTitle}</span>
    </footer>
  );
}
