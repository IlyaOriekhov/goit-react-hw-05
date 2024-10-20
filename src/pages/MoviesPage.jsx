import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { fetchMovies } from "../fetchApi";
import MovieList from "../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const userRequest = searchParams.get("query") ?? "";

  useEffect(() => {
    const getMovies = async () => {
      if (!userRequest) return;
      try {
        const data = await fetchMovies(userRequest);
        setMovies(data);
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong. You can try again later");
      }
    };
    getMovies();
  }, [userRequest]);

  const validateInput = (input) => {
    const validInputRegex = /^[a-zA-Z0-9\s]+$/;
    return validInputRegex.test(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchValue = e.target.userRequest.value.trim();

    if (!searchValue) {
      toast.error("Please enter some text");
      return;
    }

    if (!validateInput(searchValue)) {
      toast.error("Please enter a valid query");
      return;
    }

    const params = searchValue !== "" ? { query: searchValue } : {};
    setSearchParams(params);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userRequest" />
        <button type="submit">Search</button>
      </form>

      {movies !== null && <MovieList movies={movies} />}
      <Toaster />
    </div>
  );
};

export default MoviesPage;
