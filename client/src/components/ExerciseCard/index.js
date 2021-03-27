import React from 'react';


function SEbutton(props) {
  return(
    
<div className=" exercise card text-center mx-auto bg-transparent ">
  <div className="card-body text-white border-0">
    <h3>{props.exercisename}</h3>
    <p className='card-text'>Body Part: {props.exercisetype}</p>
    {props.children}
  </div>
</div>

  )
};

export default SEbutton;