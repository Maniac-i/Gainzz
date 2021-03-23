import React from 'react';


function SEbutton(props) {
  return(
    
<div className="card text-center mx-auto">
  <div className="card-body bg-dark text-white" key={props.id}>
    <h3>{props.exercisename}</h3>
    <p className='card-text'>Body Part: {props.exercisetype}</p>
    <div className="btn btn-light">View</div>
  </div>
</div>

  )
};

export default SEbutton;