/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import ExerciseCard from "../../components/ExerciseCard/index";
import Jumbotron from "../../components/Jumbotron/index";
import Navbar from '../../components/Navbar';
import API from "../../utils/API";
import ExerciseDetails from '../ExerciseDetails/index';
import jwt_decode from "jwt-decode";
import { Row, Col } from "../../components/Grid"
import AddBtn from '../../components/AddExerciseCard';
import FontAwesome from 'react-fontawesome'


function Container() {
  const [exercises, setExercises] = useState([]);
  const [eId, setEid] = useState('');
  const [viewDetails, setViewDetails] = useState();
  
  const user = (jwt_decode(localStorage.jwtToken));

  //load all of the users exercises and store them with loadExercises
  useEffect(() => {
    loadExercises()
  }, [])

  let id = user.id;
  function loadExercises() {
    //remove and replace with user id number once signup/login works

    API.findAllByUserId(id)
      .then((res) => {
        setExercises(res.data);
      })
      .catch((err) => console.log(err));
  }

  function getExerciseId(e) {
    let id = e.target.getAttribute('data-id');
    setEid(id);

    setViewDetails(true);
    
  } 

  let exerciseCols = []
  if (exercises.length>0) {
    exerciseCols = exercises.reduce( (rows, key, index) =>{ 
       return (index % 3 === 0 ? rows.push([key]) 
         : rows[rows.length-1].push(key)) && rows;
     }, []);
   
  }

  return (
    <div className="container">
      <Navbar/>
      {!viewDetails ?
      <div className="header">
      <Jumbotron src={`${process.env.PUBLIC_URL}/headers/aeHeader.png`} /> 
      <AddBtn/>
      </div>
      
        
      : <div></div>
      }


      {!viewDetails ?
      exerciseCols.map((row) => (

        <Row>
          {row.map (exercise => (
            <Col size="md-4 xs-12 mx-auto">
          
            <ExerciseCard
              exercisename={exercise.name}
              exercisetype={exercise.type}
              userId={exercise.userId}
              key={exercise._id}
              id={exercise._id}>

              <div className=" icon btn btn-light bg-transparent border-0" data-id={exercise._id} onClick={getExerciseId}>
                <FontAwesome className="super-crazy-colors"
                    name="expand"
                    size="2x"
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "white" }}
                  />
              </div>

            </ExerciseCard>
      
          </Col>
          )
          )}
        </Row>
         
      ))
      :

        <div>
          <div className="btn btn-light" onClick={() => setViewDetails(false)}>Go Back</div>
          <ExerciseDetails id={eId}/>
          </div>}
        </div>
  );
}

export default Container;
