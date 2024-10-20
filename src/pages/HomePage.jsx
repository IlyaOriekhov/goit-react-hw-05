import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import { fetchTrendingMovies } from "../fetchApi";

import MovieList from "../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getallMovies = async () => {
      try {
        const results = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong. You can try again later");
      }
    };
    getallMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
      <Toaster />
    </div>
  );
};

export default HomePage;
