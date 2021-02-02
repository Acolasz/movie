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

  const loadMovie = movie => {
    setSelectedMovie(movie);
    setEditedMovie(null);
  }
  const editClicked = movie => {
    setEditedMovie(movie);
    setSelectedMovie(null);
  }
  const updateMovie = movie => {
    const newMovies = movies.map( mov => {
      if (mov.id === movie.id) {
        return movie;
      }
      return mov;
    })
    setMovies(newMovies)
  }
  const newMovie = () => {
    setEditedMovie({name: '', description: '',  });
    setSelectedMovie(null);
  }
  const movieCreated = movie => {
    const newMovies = [...movies, movie];
    setMovies(newMovies);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie</h1>
      </header>
      <div className="layout">
        <div>
        <MovieList movies={movies} movieClicked={loadMovie} editClicked={editClicked} />
        <button onClick={newMovie}>New Movie</button>
        </div>
        <MovieDetails movie={selectedMovie} updateMovie={loadMovie} />
        { editedMovie ? <MovieFrom movie={editedMovie} updateMovie={updateMovie} movieCreated={movieCreated} /> : null }
      </div>
    </div>
  );
}

export default App;
