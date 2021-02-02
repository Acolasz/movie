import React, { useState, useEffect } from 'react';
import { ApiServices } from "../ApiServices";

function MovieFrom(props) {
  const [ id, setId ] = useState();
  const [ name, setName ] = useState();
  const [ description, setDescription ] = useState();
  const [ rate, setRate ] = useState();
  const [ detail1, setDetail1 ] = useState();
  const [ detail2, setDetail2 ] = useState();

  useEffect( () => {
    setId(props.movie.id);
    setName(props.movie.name);
    setDescription(props.movie.description);
    setRate(props.movie.rate);
    setDetail1(props.movie.detail1);
    setDetail2(props.movie.detail2);
  }, [props.movie])

  const updateClicked = () => {
    ApiServices.updateMovie(props.movie.id, {id, name, description, detail1, detail2, rate})
      .then( resp => props.updateMovie(resp) )
      .catch( error => console.log(error) )
  }
  const createClicked = () => {
    ApiServices.createMovie({id, name, description, detail1, detail2, rate})
      .then( resp => props.movieCreated(resp) )
      .catch( error => console.log(error) )
  }
  return (
    <React.Fragment>
      {
        props.movie ? (
          <div>
            <h1>{props.movie && props.movie.name}</h1>
            <label htmlFor="name">Name</label><br/>
            <input id="name" type="text" placeholder="Name" value={name}
                   onChange={ evt => setName(evt.target.value) }
            /><br/>
            <label htmlFor="description">Description</label><br/>
            <textarea id="description" type="text" placeholder="Description" value={description}
                      onChange={ evt => setDescription(evt.target.value) }
            /><br/>
            { props.movie.id ?
              <button onClick={updateClicked}>Update</button> :
              <button onClick={createClicked}>Create</button>
            }



            {/*<label>Details1</label><br/>*/}
            {/*<input type="text" placeholder="Details1"></input>*/}
            {/*<label>Details2</label><br/>*/}
            {/*<input type="text" placeholder="Details2"></input>*/}
            {/*<label>Rate</label><br/>*/}
            {/*<input type="text" placeholder="Rate"></input>*/}
          </div>
        ) : null
      }
    </React.Fragment>
  )
}

export default MovieFrom;
