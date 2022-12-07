import React from "react";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A"
      ? "https://m.media-amazon.com/images/I/81tbD2AAQKL._SY550_.jpg"
      : movie.Poster;

  return (
    <>
      <div className="col d-flex justify-content-center my-4">
        <div className="card" style={{ width: "14rem" }}>
          <img className="card-img-top" src={poster} />
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">Type: {movie.Type}</p>
            <p className="card-text">Released year: {movie.Year}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
