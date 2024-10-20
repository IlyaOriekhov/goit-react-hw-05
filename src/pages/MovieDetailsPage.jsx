import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import MovieCard from "../components/MovieCard/MovieCard";
import MovieDetails from "../components/MovieDetailsPage/MovieDetailsPage";

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLink = useRef(location.state || "/movies");

  return (
    <div>
      <Link to={backLink.current}>
        <button type="button">Go Back</button>
      </Link>
      <MovieCard />
      <MovieDetails />
    </div>
  );
};

export default MovieDetailsPage;
