import "./App.css";
import React, { useState, useEffect } from "react";
import "./App.css";
import loodingLogo from "./components/giphy.gif";
import Movie from "./components/Movies";
import NavBar from "./components/NavBar";
import ProgressBar from "react-bootstrap/ProgressBar";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const movieAPI = `https://www.omdbapi.com/?s=gard&page=&apikey=107568e`;
    setProgress(50);
    fetch(movieAPI)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setProgress(70);
        setLoading(false);
        setProgress(0);
        console.log(data);
      });
  }, []);
  const search = (searchInput) => {
    setLoading(true);
    setError(null);
    setProgress(50);
    fetch(`https://www.omdbapi.com/?s=${searchInput}&apikey=107568e`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setProgress(100);
          setMovies(data.Search);
          setLoading(false);
          setProgress(0);
        } else {
          setProgress(0);
          setError("Not Found");
          setLoading(false);
        }
      });
  };

  return (
    <div className="App">
      <NavBar search={search} />

      <ProgressBar now={progress} />

      <h1>TOP MOVIES</h1>
      <div>
        {loading && !error ? (
          <span>
            <img src={loodingLogo} />
          </span>
        ) : error ? (
          <div className="errorMessage">{error}</div>
        ) : (
          movies.map((movie) => <Movie  movie={movie} />)
        )}
      </div>
    </div>
  );
}

export default App;
