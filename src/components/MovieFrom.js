import React from 'react';

function MovieFrom(props) {
  return (
    <React.Fragment>
      {
        props.movie ? (
          <h1>{props.movie && props.movie.name} edited</h1>
        ) : null
      }
    </React.Fragment>
  )
}

export default MovieFrom;
