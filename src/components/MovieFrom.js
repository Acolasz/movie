import React, { useState } from 'react';

function MovieFrom(props) {
  const [ name, setName ] = useState(props.movie.name);
  const [ description, setDescription ] = useState(props.movie.description);

  const updateClicked = () => {
    console.log('update here')
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
