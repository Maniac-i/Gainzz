/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import DetailsTable from '../../components/DetailsTable/index';
import TableRow from '../../components/TableRow/index';
import AddDetailsForm from '../../components/AddDetailsForm';
var dayjs = require('dayjs');

function Container(props) {
  
  const [detail, setDetail] = useState({
    sets: '',
    reps: '',
    weight: '',
  });
  const [allDetails, setAllDetails] = useState([]);
  const [addDetail, setAddDetail] = useState(true);

  var date;
  
  if (allDetails) {
  date = dayjs(detail.date).format('MM/DD/YYYY');
  } else { date = ""}

  useEffect(() => {
    findAllDetails()
  }, [])

  //find an exercise by id and populates its details.
  function findAllDetails() {

    let id = props.id

    API.populateExerciseDetails(id)
      .then((res) => {
        console.log(res.data[0].exerciseDetails.length)
        if (res.data[0].exerciseDetails.length === 0) {
          return;
        }

        let deets = res.data[0].exerciseDetails;
        let mostRecentDeet = deets[deets.length - 1];

        setDetail(mostRecentDeet);
        setAllDetails(deets);
        
      })
  }

  const onClickSetAddDetails = () => {
    setAddDetail(true);
    findAllDetails();
  }

  return (
    <div>     
    
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
setAddDetail={onClickSetAddDetails}/>
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