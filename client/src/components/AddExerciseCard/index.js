import React from 'react';
import { Link } from "react-router-dom"
import FontAwesome from 'react-fontawesome'
import "./style.css"


function AddBtn(props) {
  return(
    
<div className=" add-exercise card text-center mx-auto bg-transparent ">
  <div className="card-body text-white border-0">
    <Link to='/create' className=" addbtn btn btn-light text-white bg-transparent border-0">Add Exercise
        <FontAwesome
        className="super-crazy-colors"
        name="plus"
        size="sm"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "white" }}
        />
    </Link>
  </div>
</div>

  )
};

export default AddBtn;