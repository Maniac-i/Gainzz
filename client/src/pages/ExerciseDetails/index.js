import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Jumbotron from '../../components/Jumbotron/index';
import DetailsTable from '../../components/DetailsTable/index';
import TableRow from '../../components/TableRow/index'
import Navbar from '../../components/Navbar';
var dayjs = require('dayjs');

function Container(props) {
  console.log(props.id)
  const [detail, setDetail] = useState([]);
  const [allDetails, setAllDetails] = useState([]);

  const date = (dayjs(detail.date).format('MM/DD/YYYY'));

  useEffect(() => {
    findAllDetails()
  }, [])

  //find an exercise by id and populates its details.
  function findAllDetails() {

    let id = '605e7c237c9fe702d70eabb8'

    API.populateExerciseDetails(id)
      .then((res) => {
        
        let deets = res.data[0].exerciseDetails;
        let mostRecentDeet = deets[deets.length - 1];

        setDetail(mostRecentDeet);
        setAllDetails(deets);
        
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
<br/>
<DetailsTable>
  {allDetails.map((deet) => (
  <TableRow 
  date={dayjs(detail.date).format('MM/DD/YYYY')}
  sets={deet.sets}
  reps={deet.reps}
  weight={deet.weight}
  />))}
</DetailsTable>
</div>
  )
}

export default Container;