import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Jumbotron from '../../components/Jumbotron/index';
var dayjs = require('dayjs');

function Container() {
  
  const [detail, setDetail] = useState([]);
  const [allDetails, setAllDetails] = useState([]);

  const date = (dayjs(detail.date).format('MM/DD/YYYY'));

  useEffect(() => {
    findAllDetails()
  }, [])

  //find an exercise by id and populates its details.
  function findAllDetails() {

    let id = "60563480dd6d07d21c959117"

    API.populateExerciseDetails(id)
      .then((res) => {
        console.log(res.data)
        let deets = res.data[0].exerciseDetails;
        let mostRecentDeet = deets[deets.length - 1];

        setDetail(mostRecentDeet);
        setAllDetails(deets);
        console.log(mostRecentDeet);
        console.log(deets);
      })
  }

  return (
    <div>
    <Jumbotron title="Exercise Deets" />
    <div className="card text-center mx-auto">
  <div className="card-body bg-dark text-white">
    <h3>Date: {date}</h3>
    <p className='card-text'>Sets: {detail.sets}</p>
    <p className='card-text'>Sets: {detail.reps}</p>
    <p className='card-text'>Sets: {detail.weight}</p>
  </div>
</div>
</div>
  )
}

export default Container;