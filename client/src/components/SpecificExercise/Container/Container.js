import React, { Component } from "react";
import SEbutton from '../Button/Button';
import API from '../../../utils/API';


class Container extends Component {
  
state = {
  specificExercise: [],
};

componentDidMount() {
  API.findAllByUserId()
    .then((res) => {
      console.log(res.data)
      this.setState({ specificExercise: res })

    })
    .catch(err => console.log(err));
}
  
  render() {
    return(
    <div className='container'>
      <SEbutton 
      exercisename='bench press' />
    </div>
  );
}
}

export default Container;