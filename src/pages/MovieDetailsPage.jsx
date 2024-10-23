import { useEffect, useState, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { fetchMovieDetails } from "../fetchApi";
import MovieCard from "../components/MovieCard/MovieCard";
import MovieDetails from "../components/MovieDetailsPage/MovieDetailsPage";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const locationStateRef = useRef(location.state);

  useEffect(() => {
    locationStateRef.current = location.state;
  }, [location.state]);

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

  const handleGoBack = () => {
    navigate("/", { state: locationStateRef.current });
  };

  return (
    <div>
      <button type="button" onClick={handleGoBack}>
        Go Back
      </button>
      {movieDetails && <MovieCard movieDetails={movieDetails} />}
      {movieDetails && <MovieDetails movieDetails={movieDetails} />}
      <Toaster />
    </div>
  );
};

export default MovieDetailsPage;
