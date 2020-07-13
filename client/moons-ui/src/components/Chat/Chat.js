import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col, ListGroup, Media, Form, Button, InputGroup, FormControl, Image} from 'react-bootstrap';
import Avatar from 'react-avatar';
import styles from './Chat.module.css';
import { Socket } from 'react-socket-io';

const uri = 'http://localhost:8080';
const options = { transports: ['websocket'] };

const name = 'Josh Perez';

const Chat = () => (
  <Socket uri={uri} options={options}> 
  <Container className={styles.Chat}>
  
               
    <Row>
      
      <Col xs={12}>
        <h6>Connected User(s)</h6> 
        Hello, {name} 
        
        <ListGroup>
          <ListGroup.Item>   
            <NavLink to='/chat/90'>
              <Avatar name="Ricardo Mendez" size="40" round={true} />
              Ricardo Mendez  
            </NavLink>                                         
          </ListGroup.Item> 

          <ListGroup.Item>   
            <NavLink to='/chat/80'>
              <Avatar name="Fatima Victoria" size="40" round={true} />
              Fatima Victoria  
            </NavLink>                                         
          </ListGroup.Item> 

          <ListGroup.Item>   
            <NavLink to='/chat/40'>
              <Avatar name="Ignacio Villeda" size="40" round={true} />
              Ignacio Villeda  
            </NavLink>                                         
          </ListGroup.Item>  
          
        </ListGroup>              
      </Col>
      
    </Row>
  </Container>  
  </Socket>
);

Chat.propTypes = {};

Chat.defaultProps = {};

export default Chat;
