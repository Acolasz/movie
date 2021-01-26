import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function MovieDetails(props) {

  const [ highlighted, setHighlighted ] = useState(-1);
  const mov = props.movie;
  const highlightRate = high => evt => {
    setHighlighted(high)
  };

  return (
    <React.Fragment>
      {
        mov ? (
          <div>
            <h1>{mov.name}</h1>
            <p>{mov.description}</p>
            <p>{mov.detail1}</p>
            <p>{mov.detail2}</p>
            <FontAwesomeIcon icon={faStar} className='orange'/>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <div className="rate-container">
              <h2>Rate it</h2>
              { [...Array(5)].map( (e, i) => {
                return <FontAwesomeIcon key={i} icon={faStar} className={highlighted > i - 1 ? 'purple' : ''}
                                        onMouseEnter={highlightRate(i)}
                                        onMouseLeave={highlightRate(-1)}
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
