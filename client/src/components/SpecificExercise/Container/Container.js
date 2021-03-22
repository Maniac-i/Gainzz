import React, { useState, useEffect } from "react";
import SEcard from "../Card/Card";
import SEjumbotron from "../Jumbotron/Jumbotron";
import API from "../../../utils/API";

function Container() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    loadExercises()
  }, [])

  //remove and replace with user id number once signup/login works
  let id = "605611e09c471acaca66eac6";

  function loadExercises() {
    API.findAllByUserId(id)
      .then((res) => {
        console.log(res.data);
        setExercises(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <SEjumbotron />
      {exercises.map((exercise) => (
        <SEcard
          exercisename={exercise.name}
          exercisetype={exercise.type}
          userId={exercise.userId}
        />
      ))}
    </div>
  );
}

export default Container;
