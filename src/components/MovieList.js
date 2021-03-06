import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function MovieList(props) {

  const movieClicked = movie => evt => {
    props.movieClicked(movie)
  }
  const editClicked = movie => {
    props.editClicked(movie)
  }
  const deleteClicked = movie => {
  }

  return (
    <div>
      {props.movies && props.movies.map(movie => {
        return (
          <div key={movie.id} className="movie-item">
            <h2 onClick={movieClicked(movie)}>{movie.name}</h2>
            <FontAwesomeIcon icon={faEdit} onClick={() => editClicked(movie)} />
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteClicked(movie)} />
          </div>
        )
      })}
    </div>
  )
}

export default MovieList;
