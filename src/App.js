import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])

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
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie</h1>
      </header>
      <div className="layout">
        <div>
          {movies.map(movie => {
            return <h2>{movie.name}</h2>
          })}
        </div>
        <div>Movie details</div>
      </div>
    </div>
  );
}

export default App;
