import React from "react";
import {Col, Row,Container } from '../../components/Grid'
import Navbar from '../../components/Navbar';
import HomepageBtn from '../../components/HomepageBtn';

function Homepage() {
  

  return (
    <div className="container">
      <Container>
        <Navbar/>
        <Row>
        <Col size="lg-12 xl-12 mx-auto">
          <HomepageBtn 
          link="allexercises"
          title="Workouts"
          style={{ 
              background: `url(${process.env.PUBLIC_URL}/cardimgs/cardWorkout.jpg)`, 
              backgroundPosition: 'center', 
              backgroundSize: "cover"}}/>
        </Col>
        </Row>

        <Row>
        <Col size="lg-12 xl-12 mx-auto">
        <HomepageBtn 
        link="addexercises"
        title="Create Exercise"
        style={{ 
              background: `url(${process.env.PUBLIC_URL}/cardimgs/cardCreate.jpg)`, 
              backgroundPosition: 'center', 
              backgroundSize: "cover"}}/>
        </Col>
        </Row>

        <Row> 
          <Col size="lg-12 xl-12 mx-auto">
          <HomepageBtn
          link="muscle" 
          title="Muscle Groups"
          style={{ 
              background: `url(${process.env.PUBLIC_URL}/cardimgs/cardMuscle.jpg)`, 
              backgroundPosition: 'center', 
              backgroundSize: "cover"}}/>
          </Col>

        </Row>
      </Container>
      
    </div>
    
  );
}

export default Homepage;
