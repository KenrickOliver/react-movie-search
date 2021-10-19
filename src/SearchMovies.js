import React, { useState } from "react";
import MovieCard from "./MovieCard";

function SearchMovies() {
  //setting state
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  // Handler function to make the fetch request
  const searchMovies = async (e) => {
    e.preventDefault();
    const key = `f6950df0c4c1db2d3f04c057d51d1aa3`;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      setQuery("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <br /> {" "}
        <input
          type="text"
          name="query"
          className="input"
          placeholder="i.e Avengers"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movies={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}

export default SearchMovies;
