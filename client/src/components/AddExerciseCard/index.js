import React from 'react';
import { Link } from "react-router-dom"


function AddBtn(props) {
  return(
    
<div className=" add-exercise card text-center mx-auto bg-transparent ">
  <div className="card-body text-white border-0">
  <Link to='/create' className="btn btn-light">Add Exercise</Link>
  </div>
</div>

  )
};

export default AddBtn;