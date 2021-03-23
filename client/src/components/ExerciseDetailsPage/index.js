import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function Container() {
  
  const [details, setDetails] = useState([]);

  useEffect(() => {
    loadDetails()
  }, [])

  function loadDetails() {

  let id = '605666e362ed25d679b0163c'

    API.findOne(id)
      .then((res) => {
        console.log(res.data)
        setDetails(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="card text-center mx-auto">
  <div className="card-body bg-dark text-white">
    <h3>Date: {details.date}</h3>
    <p className='card-text'>Sets: {details.sets}</p>
    <p className='card-text'>Sets: {details.reps}</p>
    <p className='card-text'>Sets: {details.weight}</p>
  </div>
</div>
  )
}

export default Container;