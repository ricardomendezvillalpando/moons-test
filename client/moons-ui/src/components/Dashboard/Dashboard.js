import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col,Card,Button } from 'react-bootstrap';
import styles from './Dashboard.module.css';

const Dashboard = () => (
  <Container className={styles.Chat}>
  <h1>Dashboard Page</h1> 
    <Row>
    
      <Col xs={12} md={4} lg={4}>
        <Card>  
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>            
      </Col>

      <Col xs={12} md={4} lg={4}>
        <Card>  
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>            
      </Col>

      <Col xs={12} md={4} lg={4}>
        <Card>  
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>            
      </Col>
    </Row>
  </Container>  
);

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
