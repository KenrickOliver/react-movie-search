import React from "react";

function SearchMovies() {
  return (
    <form className="form">
      <label htmlFor="query" className="label">
        Movie Name
      </label>
      <br /> {" "}
      <input
        type="text"
        name="query"
        className="input"
        placeholder="i.e Avengers"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchMovies;
