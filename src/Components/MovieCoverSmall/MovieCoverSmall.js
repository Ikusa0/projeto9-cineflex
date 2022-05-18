import "./moviecoversmall.css";

export default function MovieCover({ cover, title }) {
  return (
    <div className="movie-cover-small">
      <img src={cover} alt={title} />
    </div>
  );
}
