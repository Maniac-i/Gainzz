import React, { useState, useEffect } from "react";
import ExerciseCard from "../../components/ExerciseCard/index";
import Jumbotron from "../../components/Jumbotron/index";
import Navbar from '../../components/Navbar';
import API from "../../utils/API";
import { useAuthenticatedUser } from '../../utils/auth';
import ExerciseDetails from '../ExerciseDetails/index';


function Container() {
  const [exercises, setExercises] = useState([]);
  const [eId, setEid] = useState();
  const [viewDetails, setViewDetails] = useState();

  const user = useAuthenticatedUser();
  console.log(user);
  //load all of the users exercises and store them with loadExercises
  useEffect(() => {
    loadExercises()
  }, [])

  function loadExercises() {
    //remove and replace with user id number once signup/login works
    let id = user._id;

    API.findAllByUserId(id)
      .then((res) => {
        console.log(res.data);
        setExercises(res.data);
      })
      .catch((err) => console.log(err));
  }

  function getExerciseId(e) {
    let id = e.target.getAttribute('data-id');
    setEid(id);

    setViewDetails(true);
    
  } 

  return (
    <div className="container">
      <Navbar/>
      <Jumbotron src={`${process.env.PUBLIC_URL}/headers/aeHeader.png`} />
      {!viewDetails ?
      exercises.map((exercise) => (
        <ExerciseCard
          exercisename={exercise.name}
          exercisetype={exercise.type}
          userId={exercise.userId}
          key={exercise._id}
          id={exercise._id}>
          <div className="btn btn-light" data-id={exercise._id} onClick={getExerciseId}>View</div>
          </ExerciseCard>
          
      ))
        :<div>
      <div className="btn btn-light" onClick={() => setViewDetails(false)}>Go Back</div>
      <ExerciseDetails 
      id={eId}/>
      </div>}
    </div>
  );
}

export default Container;
