import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className={css.movieItem}>
            <Link
              state={location}
              to={`/movies/${movie.id}`}
              className={css.movieLink}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className={css.moviePoster}
              />
              <p className={css.movieTitle}>{movie.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
