import React, { useState } from 'react';
import Moment from 'react-moment';
import ScrollableFeed from 'react-scrollable-feed'
import PropTypes from 'prop-types';
import { Container, Row, Col, ListGroup, Media, Form, Button,Collapse, InputGroup, FormControl, Image,Nav, Dropdown} from 'react-bootstrap';
import styles from './ChatDetail.module.css';
// Creating references
let randomUserNumber = Math.random().toString(36).substring(5);
let randomColor = Math.floor(Math.random()*16777215).toString(16);

let textInput = React.createRef();
let username = React.createRef();


const ChatDetail = function() {
  const [name, setName] = useState(randomUserNumber);  
  const [state, setState] = useState([]);
  const [open, setOpen] = useState(true);  
return (
  <div className={styles.ChatDetail}>  
  <ScrollableFeed forceScroll='true'>
  <Container>
    <Row>
      <Col>
        <Button
            onClick={() => setOpen(!open)}
            className='pull-right'
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Welcome User {name} <i className='fa fa-chevron-down'></i>
        </Button>      
      </Col>                 
    </Row>

    <Row className='nameContainer'>
      <Collapse in={open}>    
      <Col>
      <input className="form-control" placeholder="Change name..." ref={username} />                
          <button className='btn btn-primary btn-xs' onClick={() => {setName(username.current.value);username.current.value='';setOpen(!open)}}>Set name</button>     
      </Col>       
          
      </Collapse>  
    </Row>
    
    <Col className='messagesWrapper'>
    
          
    {state.map((value, index) => {
        return <div className="speech-bubble animated zoomIn" key={index}>
          <span className='userName' style={{color:'#'+value.titleColor}}>{value.username}</span> 
          <span className='message'>{value.message}</span>            
          <Moment fromNow>{value.date}</Moment>   
        </div>
      })}   
           
    
            
      <Form autoComplete="off" inline>
        <Form.Label htmlFor="inlineFormInputName2" srOnly>
          Name
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Type message ..."  
          ref={textInput}             
        />
        <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
          Username
        </Form.Label>
        
        <Button onClick={() => setState([...state, {"date":new Date(),"titleColor":randomColor,"username":name,"message":textInput.current.value}])} className="mb-2">
          Send
        </Button>
      </Form> 
    </Col>
  </Container>
  </ScrollableFeed>   
  </div>
);

}  


ChatDetail.propTypes = {};

ChatDetail.defaultProps = {
  
};

export default ChatDetail;
