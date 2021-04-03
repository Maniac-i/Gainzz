import React, { useState, useEffect } from "react";
import { Col, Row, Container } from '../../components/Grid'
import Navbar from '../../components/Navbar';
import CardLink from '../../components/CardLink';
//import { useAuthenticatedUser } from '../../utils/auth';

import ExerciseCard from "../../components/ExerciseCard/index";
import API from "../../utils/API";
import ExerciseDetails from '../ExerciseDetails/index';
import jwt_decode from "jwt-decode";
import AddBtn from '../../components/AddExerciseCard';
import FontAwesome from 'react-fontawesome'



function Musclegroups() {
  
  //const user = useAuthenticatedUser();
  const user = (jwt_decode(localStorage.jwtToken));
  console.log(user);

  const [exercises, setExercises] = useState([]);
  const [eId, setEid] = useState('');
  const [viewDetails, setViewDetails] = useState();

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


  //trying to get exercise to display only for its specific muscle group
  const [eType, setEtype] = useState('');
  const [eTypeChest, setEtypeChest] = useState();
  const [eTypeShoulders, setEtypeShoulders] = useState();
  const [eTypeBack, setEtypeBack] = useState();
  const [eTypeBiceps, setEtypeBiceps] = useState();
  const [eTypeTriceps, setEtypeTriceps] = useState();
  const [eTypeLegs, setEtypeLegs] = useState();
  const [eTypeCore, setEtypeCore] = useState();
  
  function getExerciseType(e) {
    let type = e.target.getAttribute('eType');
    setEtype(type);

    //various muscle options
    if (type === "chest") { setEtypeChest(true); }
    if (type === "shoulders") { setEtypeShoulders(true); }
    if (type === "back") { setEtypeBack(true); }
    if (type === "biceps") { setEtypeBiceps(true); }
    if (type === "triceps") { setEtypeTriceps(true); }
    if (type === "legs") { setEtypeLegs(true); }
    if (type === "core") { setEtypeCore(true); }

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
        <Container>
          <Navbar/>
  
          <Row>
            <Col size="lg-12 xl-12 mx-auto">
                <CardLink onClick={getExerciseType}
                link="muscle"
                title="Chest"
                style={{ 
                        background: `url(${process.env.PUBLIC_URL}/musclegroups/chestIMG.jpg`, 
                        backgroundPosition: 'center', 
                        backgroundSize: "cover"}}/>
            </Col>
          </Row>



        {!viewDetails ?
          exerciseCols.map((row) => (

            <Row>
              {row.map (exercise => (
                <Col size="md-4 xs-12 mx-auto">
              
                
                {(exercise.type == "chest") ?
                <ExerciseCard
                  exercisename={exercise.name}
                  exercisetype={exercise.type}
                  userId={exercise.userId}
                  key={exercise._id}
                  id={exercise._id}>

                  <div className=" icon btn btn-light bg-transparent border-0" eType={exercise.type} data-id={exercise._id} onClick={getExerciseId}>
                    <FontAwesome className="super-crazy-colors"
                        name="folder-open"
                        size="2x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "white" }}
                      />
                  </div>

                </ExerciseCard>
                :
                <div></div>
                }
          

              </Col> 
              )
              )}
            </Row> 
          ))
          :
            <div>
              <div className="btn btn-light" onClick={() => setViewDetails(false)}>Go Back</div>
              <ExerciseDetails id={eId}/>
            </div>
        }

        



          <Row> 
            <Col size="lg-12 xl-12 mx-auto">
                <CardLink
                link="muscle" 
                title="Shoulders"
                style={{ 
                    background: `url(${process.env.PUBLIC_URL}/musclegroups/shouldersIMG.jpg)`, 
                    backgroundPosition: 'center'}}/>
            </Col>
          </Row>

          {!viewDetails ?
          exerciseCols.map((row) => (

            <Row>
              {row.map (exercise => (
                <Col size="md-4 xs-12 mx-auto">
              
                
                {(exercise.type == "shoulders") ?
                <ExerciseCard
                  exercisename={exercise.name}
                  exercisetype={exercise.type}
                  userId={exercise.userId}
                  key={exercise._id}
                  id={exercise._id}>

                  <div className=" icon btn btn-light bg-transparent border-0" eType={exercise.type} data-id={exercise._id} onClick={getExerciseId}>
                    <FontAwesome className="super-crazy-colors"
                        name="folder-open"
                        size="2x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "white" }}
                      />
                  </div>

                </ExerciseCard>
                :
                <div></div>
                }
          

              </Col> 
              )
              )}
            </Row> 
          ))
          :
            <div>
              <div className="btn btn-light" onClick={() => setViewDetails(false)}>Go Back</div>
              <ExerciseDetails id={eId}/>
            </div>
        }
  
          <Row> 
            <Col size="lg-12 xl-12 mx-auto">
                <CardLink
                link="muscle" 
                title="Back"
                style={{ 
                    background: `url(${process.env.PUBLIC_URL}/musclegroups/backIMG.jpg)`, 
                    backgroundPosition: 'center', 
                    backgroundSize: "cover"}}/>
            </Col>
          </Row>

          {!viewDetails ?
          exerciseCols.map((row) => (

            <Row>
              {row.map (exercise => (
                <Col size="md-4 xs-12 mx-auto">
              
                
                {(exercise.type == "back") ?
                <ExerciseCard
                  exercisename={exercise.name}
                  exercisetype={exercise.type}
                  userId={exercise.userId}
                  key={exercise._id}
                  id={exercise._id}>

                  <div className=" icon btn btn-light bg-transparent border-0" eType={exercise.type} data-id={exercise._id} onClick={getExerciseId}>
                    <FontAwesome className="super-crazy-colors"
                        name="folder-open"
                        size="2x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "white" }}
                      />
                  </div>

                </ExerciseCard>
                :
                <div></div>
                }
          

              </Col> 
              )
              )}
            </Row> 
          ))
          :
            <div>
              <div className="btn btn-light" onClick={() => setViewDetails(false)}>Go Back</div>
              <ExerciseDetails id={eId}/>
            </div>
        }

          <Row> 
            <Col size="lg-12 xl-12 mx-auto">
                <CardLink
                link="muscle" 
                title="Biceps"
                style={{ 
                    background: `url(${process.env.PUBLIC_URL}/musclegroups/bicepsIMG.jpg)`, 
                    backgroundPosition: 'center', 
                    backgroundSize: "cover"}}/>
            </Col>
          </Row>

          {!viewDetails ?
          exerciseCols.map((row) => (

            <Row>
              {row.map (exercise => (
                <Col size="md-4 xs-12 mx-auto">
              
                
                {(exercise.type == "biceps") ?
                <ExerciseCard
                  exercisename={exercise.name}
                  exercisetype={exercise.type}
                  userId={exercise.userId}
                  key={exercise._id}
                  id={exercise._id}>

                  <div className=" icon btn btn-light bg-transparent border-0" eType={exercise.type} data-id={exercise._id} onClick={getExerciseId}>
                    <FontAwesome className="super-crazy-colors"
                        name="folder-open"
                        size="2x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "white" }}
                      />
                  </div>

                </ExerciseCard>
                :
                <div></div>
                }
          

              </Col> 
              )
              )}
            </Row> 
          ))
          :
            <div>
              <div className="btn btn-light" onClick={() => setViewDetails(false)}>Go Back</div>
              <ExerciseDetails id={eId}/>
            </div>
        }

          <Row> 
            <Col size="lg-12 xl-12 mx-auto">
                <CardLink
                link="muscle" 
                title="Triceps"
                style={{ 
                    background: `url(${process.env.PUBLIC_URL}/musclegroups/tricepsIMG.jpg)`, 
                    backgroundPosition: 'center', 
                    backgroundSize: "cover"}}/>
            </Col>
          </Row>

          {!viewDetails ?
          exerciseCols.map((row) => (

            <Row>
              {row.map (exercise => (
                <Col size="md-4 xs-12 mx-auto">
              
                
                {(exercise.type == "triceps") ?
                <ExerciseCard
                  exercisename={exercise.name}
                  exercisetype={exercise.type}
                  userId={exercise.userId}
                  key={exercise._id}
                  id={exercise._id}>

                  <div className=" icon btn btn-light bg-transparent border-0" eType={exercise.type} data-id={exercise._id} onClick={getExerciseId}>
                    <FontAwesome className="super-crazy-colors"
                        name="folder-open"
                        size="2x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "white" }}
                      />
                  </div>

                </ExerciseCard>
                :
                <div></div>
                }
          

              </Col> 
              )
              )}
            </Row> 
          ))
          :
            <div>
              <div className="btn btn-light" onClick={() => setViewDetails(false)}>Go Back</div>
              <ExerciseDetails id={eId}/>
            </div>
        }

          <Row> 
            <Col size="lg-12 xl-12 mx-auto">
                <CardLink
                link="muscle" 
                title="Legs"
                style={{ 
                    background: `url(${process.env.PUBLIC_URL}/musclegroups/legsIMG.jpg)`, 
                    backgroundPosition: 'center', 
                    backgroundSize: "cover"}}/>
            </Col>
          </Row>

          {!viewDetails ?
          exerciseCols.map((row) => (

            <Row>
              {row.map (exercise => (
                <Col size="md-4 xs-12 mx-auto">
              
                
                {(exercise.type == "legs") ?
                <ExerciseCard
                  exercisename={exercise.name}
                  exercisetype={exercise.type}
                  userId={exercise.userId}
                  key={exercise._id}
                  id={exercise._id}>

                  <div className=" icon btn btn-light bg-transparent border-0" eType={exercise.type} data-id={exercise._id} onClick={getExerciseId}>
                    <FontAwesome className="super-crazy-colors"
                        name="folder-open"
                        size="2x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "white" }}
                      />
                  </div>

                </ExerciseCard>
                :
                <div></div>
                }
          

              </Col> 
              )
              )}
            </Row> 
          ))
          :
            <div>
              <div className="btn btn-light" onClick={() => setViewDetails(false)}>Go Back</div>
              <ExerciseDetails id={eId}/>
            </div>
        }

          <Row> 
            <Col size="lg-12 xl-12 mx-auto">
                <CardLink
                link="muscle" 
                title="Core"
                style={{ 
                    background: `url(${process.env.PUBLIC_URL}/musclegroups/coreIMG.jpg)`, 
                    backgroundPosition: 'center',
                    backgroundSize: "cover"}}/>
            </Col>
          </Row>

          {!viewDetails ?
          exerciseCols.map((row) => (

            <Row>
              {row.map (exercise => (
                <Col size="md-4 xs-12 mx-auto">
              
                
                {(exercise.type == "core") ?
                <ExerciseCard
                  exercisename={exercise.name}
                  exercisetype={exercise.type}
                  userId={exercise.userId}
                  key={exercise._id}
                  id={exercise._id}>

                  <div className=" icon btn btn-light bg-transparent border-0" eType={exercise.type} data-id={exercise._id} onClick={getExerciseId}>
                    <FontAwesome className="super-crazy-colors"
                        name="folder-open"
                        size="2x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "white" }}
                      />
                  </div>

                </ExerciseCard>
                :
                <div></div>
                }
          

              </Col> 
              )
              )}
            </Row> 
          ))
          :
            <div>
              <div className="btn btn-light" onClick={() => setViewDetails(false)}>Go Back</div>
              <ExerciseDetails id={eId}/>
            </div>
        }

        </Container>
        
      </div>
      
    );
}
  
export default Musclegroups;