import css from "./MovieCard.module.css";

const MovieCard = ({ movieDetails }) => {
  const release_date = new Date(movieDetails.release_date);

  return (
    <div className={css.wrapper}>
      <img
        className={css.image}
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt={movieDetails.original_title}
      />
      <div className={css.textWrapper}>
        <h2>
          {movieDetails.title} {release_date.getFullYear()}
        </h2>
        <p>User score: {Math.round(movieDetails.vote_average * 10)}% </p>
        <h3>Overveiw</h3>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>
        <ul className={css.list}>
          {movieDetails.genres &&
            movieDetails.genres.map((genre) => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
