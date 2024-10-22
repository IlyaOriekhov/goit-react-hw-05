import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { fetchMovieDetails } from "../fetchApi";
import MovieCard from "../components/MovieCard/MovieCard";
import MovieDetails from "../components/MovieDetailsPage/MovieDetailsPage";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from || "/movies";
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong. You can try again later");
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={backLink}>
        <button type="button">Go Back</button>
      </Link>
      {movieDetails && <MovieCard movieDetails={movieDetails} />}
      {movieDetails && <MovieDetails movieDetails={movieDetails} />}
      <Toaster />
    </div>
  );
};

export default MovieDetailsPage;
