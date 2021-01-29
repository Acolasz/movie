import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import MovieFrom from "./components/MovieFrom";

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [editedMovie, setEditedMovie] = useState(null)

  useEffect(() => {
    fetch("http://localhost:9094/product/all", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(resp => resp.json())
      .then(resp => setMovies(resp))
      .catch(error => console.log(error))
  }, [])

  // const movieClicked = movie => {
  //   setSelectedMovie(movie);
  // }
  const loadMovie = movie => {
    setSelectedMovie(movie);
    // setEditedMovie(null);
  }
  const editClicked = movie => {
    setEditedMovie(movie);
    setSelectedMovie(null);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie</h1>
      </header>
      <div className="layout">
        <MovieList movies={movies} movieClicked={loadMovie} editClicked={editClicked} />
        <MovieDetails movie={selectedMovie} updateMovie={loadMovie} />
        <MovieFrom movie={editedMovie} />
      </div>
    </div>
  );
}

export default App;
