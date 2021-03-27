import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthenticatedUser } from '../../utils/auth';
import { Link } from 'react-router-dom';
import API from '../../utils/API';

function AddExerciseForm(props) {

  const user = useAuthenticatedUser();
  const history = useHistory();
  const [value, setValue] = useState();
  const exerciseNameRef = useRef();

  function redirectHome() {
    //change to the allexercise route
    history.push("/workouts");
  }

  function onChange(e) {
    setValue(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let exercise = {
      type: value,
      name: exerciseNameRef.current.value,
      userId: user._id
    }

    API.addExercise(exercise)
    .then((res) => {
      console.log(res);
      redirectHome();
    })
    .catch((err) => console.log(err))
  };


  return (
    <div className="card card-addexe ">
      <div className="card-body">
        <h5 className="card-title text-center">Add an Exercise</h5>
        <form className="form-signin">
          <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
            Select a Muscle Group
          </label>
          <select
            className="custom-select my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            value={value}
            onChange={onChange}
          >
            <option defaultValue>Select</option>
            <option value="chest">Chest</option>
            <option value="back">Back</option>
            <option value="biceps">Biceps</option>
            <option value="triceps">Triceps</option>
            <option value="shoulders">Shoulders</option>
            <option value="legs">Legs</option>
            <option value="core">Core</option>
          </select>

          <div className="addexe form-label-group">
            <input
              type="text"
              ref={exerciseNameRef}
              id="inputPassword"
              className="form-control"
              placeholder="Exercise Name"
              required
            />
            <label htmlFor="inputPassword"></label>
          </div>

          <hr />

          <button
            className="btn btn-lg btn-dark btn-block text-uppercase"
            type="submit"
            onClick={handleSubmit}
          >
            Add Exercise
          </button>
          <Link className="d-block text-center mt-2 small" to="/home">
            Return
          </Link>
        </form>
      </div>
    </div>
  );
}
export default AddExerciseForm;
