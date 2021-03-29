import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Jumbotron from '../../components/Jumbotron/index';
import DetailsTable from '../../components/DetailsTable/index';
import TableRow from '../../components/TableRow/index';
import AddDetailsForm from '../../components/AddDetailsForm';
var dayjs = require('dayjs');

function Container(props) {
  console.log(props.id)
  const [detail, setDetail] = useState([]);
  const [allDetails, setAllDetails] = useState([]);
  const [addDetail, setAddDetail] = useState(true);

  const date = (dayjs(detail.date).format('MM/DD/YYYY'));

  useEffect(() => {
    findAllDetails()
  }, [])

  //find an exercise by id and populates its details.
  function findAllDetails() {

    let id = props.id

    API.populateExerciseDetails(id)
      .then((res) => {
        
        let deets = res.data[0].exerciseDetails;
        let mostRecentDeet = deets[deets.length - 1];

        setDetail(mostRecentDeet);
        setAllDetails(deets);
        
      })
  }

  const onClickSetAddDetaisl = () => {
    setAddDetail(true);
  }

  return (
    <div>     
    <Jumbotron title="Exercise Deets" />
    <div className="card text-center mx-auto">
  <div className="card-body bg-dark text-white">
    <h3>Date: {date}</h3>
    <p className='card-text'>Sets: {detail.sets}</p>
    <p className='card-text'>Reps: {detail.reps}</p>
    <p className='card-text'>Weight: {detail.weight}</p>
  </div>
</div>

{addDetail ?
  <button className="btn btn-lg btn-dark btn-block text-uppercase" 
 onClick={() => setAddDetail(false)}>Add Detail</button>
 :
<AddDetailsForm 
id={props.id}
setAddDetail={onClickSetAddDetaisl}/>
}

<br/>
<DetailsTable>
  {allDetails.map((deet) => (
  <TableRow 
  date={dayjs(deet.date).format('MM/DD/YYYY')}
  sets={deet.sets}
  reps={deet.reps}
  weight={deet.weight}
  />))}
</DetailsTable>
</div>
  )
}

export default Container;