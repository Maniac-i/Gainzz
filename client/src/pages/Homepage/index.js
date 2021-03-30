import React from "react";
import {Col, Row,Container } from '../../components/Grid'
import Navbar from '../../components/Navbar';
import CardLink from '../../components/CardLink';

function Homepage() {
  
  return (
    <div className="container">
      <Container>
        <Navbar/>
        <Row>
        <Col size="lg-12 xl-12 mx-auto">
          <CardLink 
          link="workouts"
          title="Workouts"
          style={{ 
              background: `url(${process.env.PUBLIC_URL}/cardimgs/cardWorkout.jpg)`, 
              backgroundPosition: 'center', 
              backgroundSize: "cover"}}/>
        </Col>
        </Row>

        <Row>
        <Col size="lg-12 xl-12 mx-auto">
        <CardLink 
        link="create"
        title="Create Exercise"
        style={{ 
              background: `url(${process.env.PUBLIC_URL}/cardimgs/cardCreate.jpg)`, 
              backgroundPosition: 'center', 
              backgroundSize: "cover"}}/>
        </Col>
        </Row>

        <Row> 
          <Col size="lg-12 xl-12 mx-auto">
          <CardLink
          link="muscle" 
          title="Muscle Groups"
          style={{ 
              background: `url(${process.env.PUBLIC_URL}/cardimgs/cardMuscle.jpg)`, 
              backgroundPosition: 'center', 
              backgroundSize: "cover"}}/>
          </Col>

        </Row>

        <Row> 
          <Col size="lg-12 xl-12 mx-auto">
          <CardLink
          link="broscience" 
          title="Bro Science"
          style={{ 
              background: `url(${process.env.PUBLIC_URL}/cardimgs/cardBro.jpg)`, 
              backgroundPosition: 'center', 
              backgroundSize: "cover"}}/>
          </Col>

        </Row>
      </Container>
      
    </div>
    
  );
}

export default Homepage;
