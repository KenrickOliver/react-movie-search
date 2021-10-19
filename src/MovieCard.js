import React from "react";

function MovieCard(props) {
  return (
    <div className="card">
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movies.poster_path}`}
        alt={props.movies.title + ` poster`}
      />
      <div className="card--content">
        <h3 className="card--title">{props.movies.title}</h3>
        <p>
          <small>RELEASE DATE: {props.movies.release_date}</small>
        </p>
        <p>
          <small>RELEASE RATING: {props.movies.vote_average}</small>
        </p>
        <p className="card--desc">{props.movies.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
