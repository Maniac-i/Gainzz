import React, { Component } from "react";
import SEcard from '../Card/Card';
import SEjumbotron from '../Jumbotron/Jumbotron';
import API from '../../../utils/API';


class Container extends Component {
  
  
  state = {
    specificExercise: [],
  };
  
  componentDidMount() {
    //remove and replace with user id number once signup/login works
  let id = "605611e09c471acaca66eac6";
  
  API.findAllByUserId(id)
    .then((res) => {
      console.log(res.data)
      this.setState({ specificExercise: res.data })

    })
    .catch(err => console.log(err));
}
  
  render() {
    return(
    <div className='container'>
      <SEjumbotron />
      {this.state.specificExercise.map((exercise) => (
      <SEcard 
      exercisename={exercise.name}
      exercisetype={exercise.type}
      userId={exercise.userId} />
      ))}
    </div>
  );
}
}

export default Container;