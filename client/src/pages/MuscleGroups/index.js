import React from "react";
import {Col, Row,Container } from '../../components/Grid'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CardLink from '../../components/CardLink';
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
                <CardLink 
                link="muscle"
                title="All Muscle Groups"
                style={{ 
                        background: `url(${process.env.PUBLIC_URL}/cardimgs/cardMuscle.jpg)`, 
                        backgroundPosition: 'center', 
                        backgroundSize: "cover"}}/>
            </Col>
          </Row>
  
          <Row>
            <Col size="lg-12 xl-12 mx-auto">
                <CardLink 
                link="muscle"
                title="Chest"
                style={{ 
                        background: `url(${process.env.PUBLIC_URL}/musclegroups/chestIMG.jpg`, 
                        backgroundPosition: 'center', 
                        backgroundSize: "cover"}}/>
            </Col>
          </Row>

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
  
          <Row> 
            <Col size="lg-12 xl-12 mx-auto">
                <CardLink
                link="muscle" 
                title="Back"
                style={{ 
                    background: `url(${process.env.PUBLIC_URL}/musclegroups/backIMG.jpg)`, 
                    backgroundPosition: 'center'}}/>
            </Col>
          </Row>

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

          <Footer/>

        </Container>
        
      </div>
      
    );
}
  
export default Musclegroups;