import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

const Smurf = (props) => {
  return (
    <div className="smurf">
      <button id="delete" type="button" onClick={() => props.deleteSmurf(props.smurf.id)}>
        <FontAwesomeIcon icon="trash" />
      </button>
      <button id="edit" type="button" onClick={() => props.showForm(props.smurf.id)}>
        <FontAwesomeIcon icon="user-edit" />
      </button>
      {/* <h1>{props.smurf.name}</h1> */}
      <a href={`https://smurfs.fandom.com/wiki/${props.smurf.name}_Smurf`} target="_blank">{props.smurf.name}</a>
      <div className="smurf-data">
        <p>Age: {props.smurf.age}</p>
        <p>Height: {props.smurf.height}</p>
      </div>
    </div>
  );
}

export default Smurf;