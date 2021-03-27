import React from 'react';


function SEbutton(props) {
  return(
    
<div className="card text-center mx-auto">
  <div className="card-body bg-dark text-white">
    <h3>{props.exercisename}</h3>
    <p className='card-text'>Body Part: {props.exercisetype}</p>
    {props.children}
  </div>
</div>

  )
};

export default SEbutton;