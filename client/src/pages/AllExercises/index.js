import React, { useState, useEffect } from "react";
import ExerciseCard from "../../components/ExerciseCard/index";
import Jumbotron from "../../components/Jumbotron/index";
import Navbar from '../../components/Navbar';
import API from "../../utils/API";

function Container() {
  const [exercises, setExercises] = useState([]);

  //load all of the users exercises and store them with loadExercises
  useEffect(() => {
    loadExercises()
  }, [])

  
  function loadExercises() {
    //remove and replace with user id number once signup/login works
    let id = "605611e09c471acaca66eac6";

    API.findAllByUserId(id)
      .then((res) => {
        console.log(res.data);
        setExercises(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <Navbar/>
      <Jumbotron src={`${process.env.PUBLIC_URL}/headers/aeHeader.png`} />
      {exercises.map((exercise) => (
        <ExerciseCard
          exercisename={exercise.name}
          exercisetype={exercise.type}
          userId={exercise.userId}
          key={exercise._id}
        />
      ))}
    </div>
  );
}

export default Container;
