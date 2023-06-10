import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing-page mt-5" >
        <Container>
           
          <Row>
            <Col sm={12} md={6}>
              <h1>Welcome to My Website</h1>
            </Col>
            <Col sm={12} md={6}>
              {/* <img src="" alt="landing-page-img" /> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landing;