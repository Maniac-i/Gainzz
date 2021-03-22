import React from 'react';


function SEbutton(props) {
  return(
    
<div className="d-grid gap-2 col-12 mx-auto">
<button className="btn btn-dark" type="button">{props.exercisename}</button>
</div>

  )
};

export default SEbutton;