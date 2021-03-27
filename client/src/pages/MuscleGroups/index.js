import React from "react";
import {Col, Row,Container } from '../../components/Grid'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HomepageBtn from '../../components/HomepageBtn';
import { useAuthenticatedUser } from '../../utils/auth';

function Musclegroups() {
  
    const user = useAuthenticatedUser();
    console.log(user);
  
    return (
      <div className="container">
        <Container>
          <Navbar/>

          <Row>
            <Col size="lg-12 xl-12 mx-auto">
                <HomepageBtn 
                link="workouts"
                title="All Muscle Groups"
                style={{ 
                        background: `url(${process.env.PUBLIC_URL}/cardimgs/cardMuscle.jpg)`, 
                        backgroundPosition: 'center', 
                        backgroundSize: "cover"}}/>
            </Col>
          </Row>
  
          <Row>
            <Col size="lg-12 xl-12 mx-auto">
                <HomepageBtn 
                link="workouts"
                title="Chest"
                style={{ 
                        background: `url(${process.env.PUBLIC_URL}/cardimgs/cardMuscle.jpg`, 
                        backgroundPosition: 'center', 
                        backgroundSize: "cover"}}/>
            </Col>
          </Row>
  
          <Row> 
            <Col size="lg-12 xl-12 mx-auto">
                <HomepageBtn
                link="workouts" 
                title="Back"
                style={{ 
                    background: `url(${process.env.PUBLIC_URL}/cardimgs/cardMuscle.jpg)`, 
                    backgroundPosition: 'center', 
                    backgroundSize: "cover"}}/>
            </Col>
          </Row>

          <Row> 
            <Col size="lg-12 xl-12 mx-auto">
                <HomepageBtn
                link="workouts" 
                title="Biceps"
                style={{ 
                    background: `url(${process.env.PUBLIC_URL}/cardimgs/cardMuscle.jpg)`, 
                    backgroundPosition: 'center', 
                    backgroundSize: "cover"}}/>
            </Col>
          </Row>

          <Row> 
            <Col size="lg-12 xl-12 mx-auto">
                <HomepageBtn
                link="workouts" 
                title="Triceps"
                style={{ 
                    background: `url(${process.env.PUBLIC_URL}/cardimgs/cardMuscle.jpg)`, 
                    backgroundPosition: 'center', 
                    backgroundSize: "cover"}}/>
            </Col>
          </Row>

          <Row> 
            <Col size="lg-12 xl-12 mx-auto">
                <HomepageBtn
                link="workouts" 
                title="Shoulders"
                style={{ 
                    background: `url(${process.env.PUBLIC_URL}/cardimgs/cardMuscle.jpg)`, 
                    backgroundPosition: 'center', 
                    backgroundSize: "cover"}}/>
            </Col>
          </Row>

          <Row> 
            <Col size="lg-12 xl-12 mx-auto">
                <HomepageBtn
                link="workouts" 
                title="Legs"
                style={{ 
                    background: `url(${process.env.PUBLIC_URL}/cardimgs/cardMuscle.jpg)`, 
                    backgroundPosition: 'center', 
                    backgroundSize: "cover"}}/>
            </Col>
          </Row>

          <Row> 
            <Col size="lg-12 xl-12 mx-auto">
                <HomepageBtn
                link="workouts" 
                title="Core"
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
  
export default Musclegroups;