import React, { useState, useEffect } from "react";
import ExerciseCard from "../../components/ExerciseCard/index";
import Jumbotron from "../../components/Jumbotron/index";
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
      <Jumbotron title="All Exercises" />
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
