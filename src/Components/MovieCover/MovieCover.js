import "./moviecover.css";
import { Link } from "react-router-dom";

export default function MovieCover({ cover, title, id }) {
  return (
    <div className="movie-cover">
      <Link to={`/sessions/${id}`}>
        <img src={cover} alt={title} />
      </Link>
    </div>
  );
}
