import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function MovieDetails(props) {

  const [ highlighted, setHighlighted ] = useState(-1);
  let mov = props.movie;
  const highlightRate = high => evt => {
    setHighlighted(high)
  };
  const rateClicked = rate => evt => {
    fetch("http://localhost:9094/product/"+mov.id+"/rate", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        rate: rate + 1
      })
    })
      .then( () => getDetails() )
      .catch(error => console.log(error))
  }
  const getDetails = () => {
    fetch("http://localhost:9094/product/"+mov.id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
        .then(resp => resp.json())
        .then(resp => props.updateMovie(resp))
        .catch(error => console.log(error))
  }
  return (
    <React.Fragment>
      {
        mov ? (
          <div>
            <h1>{mov.name}</h1>
            <p>{mov.description}</p>
            <p>{mov.detail1}</p>
            <p>{mov.detail2}</p>
            <FontAwesomeIcon icon={faStar} className={mov.rate > 0 ? 'orange' : ''}/>
            <FontAwesomeIcon icon={faStar} className={mov.rate > 1 ? 'orange' : ''}/>
            <FontAwesomeIcon icon={faStar} className={mov.rate > 2 ? 'orange' : ''}/>
            <FontAwesomeIcon icon={faStar} className={mov.rate > 3 ? 'orange' : ''}/>
            <FontAwesomeIcon icon={faStar} className={mov.rate > 4 ? 'orange' : ''}/>
            <div className="rate-container">
              <h2>Rate it</h2>
              { [...Array(5)].map( (e, i) => {
                return <FontAwesomeIcon key={i} icon={faStar} className={highlighted > i - 1 ? 'purple' : ''}
                                        onMouseEnter={highlightRate(i)}
                                        onMouseLeave={highlightRate(-1)}
                                        onClick={rateClicked(i)}
                />
              })}
            </div>
          </div>
        ) : null
      }
    </React.Fragment>
  )
}

export default MovieDetails;
