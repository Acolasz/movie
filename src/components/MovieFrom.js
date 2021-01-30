import React, { useState } from 'react';
import { ApiServices } from "../ApiServices";

function MovieFrom(props) {
  const [ id, setId ] = useState(props.movie.id);
  const [ name, setName ] = useState(props.movie.name);
  const [ description, setDescription ] = useState(props.movie.description);
  const [ rate, setRate ] = useState(props.movie.rate);
  const [ detail1, setDetail1 ] = useState(props.movie.detail1);
  const [ detail2, setDetail2 ] = useState(props.movie.detail2);

  const updateClicked = () => {
    ApiServices.updateMovie(props.movie.id, {id, name, description, detail1, detail2, rate})
      .then( resp => props.updateMovie(resp) )
      .catch( error => console.log(error) )
  }
  return (
    <React.Fragment>
      {
        props.movie ? (
          <div>
            <h1>{props.movie && props.movie.name} edited</h1>
            <label htmlFor="name">Name</label><br/>
            <input id="name" type="text" placeholder="Name" value={name}
              onChange={ evt => setName(evt.target.value) }
            /><br/>
            <label htmlFor="description">Description</label><br/>
            <textarea id="description" type="text" placeholder="Description" value={description}
                      onChange={ evt => setDescription(evt.target.value) }
            /><br/>
            <button onClick={updateClicked}>Update</button>
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
