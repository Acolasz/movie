import React from 'react';

function MovieDetails(props) {

  return (
    <div>
      {
        props.movie ? (
          <div>
            <h1>{props.movie.name}</h1>
            <p>{props.movie.description}</p>
            <p>{props.movie.detail1}</p>
            <p>{props.movie.detail2}</p>
          </div>
        ) : null
      }
    </div>
  )
}

export default MovieDetails;
