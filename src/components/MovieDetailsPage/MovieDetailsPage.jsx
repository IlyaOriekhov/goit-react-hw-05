import { Link, Outlet } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

const MovieDetails = ({ movieDetails }) => {
  return (
    <div className={css.wrapper}>
      {movieDetails && (
        <div>
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
        </div>
      )}

      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
