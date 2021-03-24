import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Jumbotron from '../../components/Jumbotron/index';
var dayjs = require('dayjs');

function Container() {
  
  const [details, setDetails] = useState([]);
  const [allDetails, setAllDetails] = useState([]);

  const date = (dayjs(details.date).format('MM/DD/YYYY'));

  useEffect(() => {
    loadDetails()
    findAllDetails()
  }, [])

  function findAllDetails() {

    let id = "60563480dd6d07d21c959117"

    API.populateExerciseDetails(id)
      .then((res) => {
        console.log(res.data)
      })
  }

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
    <div>
    <Jumbotron title="Exercise Deets" />
    <div className="card text-center mx-auto">
  <div className="card-body bg-dark text-white">
    <h3>Date: {date}</h3>
    <p className='card-text'>Sets: {details.sets}</p>
    <p className='card-text'>Sets: {details.reps}</p>
    <p className='card-text'>Sets: {details.weight}</p>
  </div>
</div>
</div>
  )
}

export default Container;