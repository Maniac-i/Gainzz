import React, { useState, useEffect } from "react";
import {Col, Row } from '../../components/Grid'
import Navbar from '../../components/Navbar';
import HomepageBtn from '../../components/HomepageBtn';
import API from "../../utils/API";

function Homepage() {
  

  return (
    <div className="container">
      <Navbar/>
      <Row>
      <Col size="lg-12 xl-12 mx-auto">
        <HomepageBtn 
        title="Workouts"
        link='broscience'
        style={{ 
            background: `url(${process.env.PUBLIC_URL}/cardimgs/cardWorkout.jpg)`, 
            backgroundPosition: 'center', 
            backgroundSize: "cover"}}/>
      </Col>
      </Row>

      <Row>
      <Col size="lg-12 xl-12 mx-auto">
      <HomepageBtn 
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
        title="Muscle Groups"
        style={{ 
            background: `url(${process.env.PUBLIC_URL}/cardimgs/cardMuscle.jpg)`, 
            backgroundPosition: 'center', 
            backgroundSize: "cover"}}/>
        </Col>

      </Row>
    </div>
  );
}

export default Homepage;
