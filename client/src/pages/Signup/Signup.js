import React from 'react';
import Navbar from '../../components/Navbar';
import SignUpCard from '../../components/SignUpCard';
import { Container, Row, Col } from "../../components/Grid"

function Signup () {

    return (
        <div>
            <Navbar/>
            <Container>
                <Row>
                    <Col size="lg-12 xl-12 mx-auto">
                        <SignUpCard/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Signup;