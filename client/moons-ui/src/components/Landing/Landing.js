import React from 'react';
import PropTypes from 'prop-types';
import styles from './Landing.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Lottie from 'lottie-react-web'
import animation from '../../welcome.json';

const Landing = () => (
  
    <Container className={styles.Landing}>    
    <Row>
    
      <Col>
      <h1>About Test</h1> 
      <p>This App contains the followin three routes (components):</p>
      <ol>
        <li>/ (Landing component)</li>
        <li>/chat (Chat component)</li>
        <li>/dashboard (Dashboard component)</li>
      </ol>
      <h3>Client Side:</h3>  
        <ul>
            <li>React</li>
        </ul>
        <h3>
          Server Side:
        </h3> 
        <ul>
            <li>NodeJs</li>
            <li>Express</li>
            <li>Socket IO (Real time communication) </li>
        </ul>

        <h5>
          Version Control:
        </h5> 
        <ul>
            <li>Git</li>            
        </ul>

        <h5>
          Infrastructure:
        </h5> 
        <ul>
            <li>Heroku</li>            
        </ul>
      </Col>
      <Col xs={12} md={6} lg={6}>
      <Lottie
        
          options={{
            animationData: animation,
            
          }}
        />
      </Col>
      
    </Row>
    <Row>
      
      
      
    </Row>    
    <Row>
      
      <Col>
                         
        
     
      </Col>
    </Row>
</Container>  
);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
