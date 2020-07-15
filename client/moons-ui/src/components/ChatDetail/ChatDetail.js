import React, { useState } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { Container, Row, Col, ListGroup, Media, Form, Button,Collapse, InputGroup, FormControl, Image,Nav, Dropdown} from 'react-bootstrap';
import axios from 'axios';
import styles from './ChatDetail.module.css';
import io from 'socket.io-client';
import Picker from 'emoji-picker-react';
import Lottie from 'lottie-react-web'
import animation from '../../writting.json';
// Creating references
let randomUserNumber = Math.random().toString(36).substring(5);
let randomColor = Math.floor(Math.random()*16777215).toString(16);

let textInput = React.createRef();
let username = React.createRef();


const socket = io();

const ChatDetail = function() {

  

  const [name, setName] = useState(randomUserNumber);  
  const [state, setState] = useState([{
    root:true,
    message:"Welcome to chat"
  }]);
  const [open, setOpen] = useState(true); 
  const [typing, setTyping] = useState(false); 
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const handleKeyPress = (event) => {  
    console.log(event.key)  
    socket.emit('userTyping', { user:name});
  };

  const onEmojiClick = (event, emojiObject) => {    
    textInput.current.value+=emojiObject.emoji;
    setChosenEmoji(emojiObject);
  };

  
  socket.on('updateConversation', (data) => {    
    setState([...state, data.message]);
  });

  socket.on('updateConversationName', (objName) => {    
    var newState = state.map(function(conv){
      if(conv.username===objName.oldName){
        return conv.username=objName.name
      }
    });    
    setState([...state, {'root':true,'message':objName.oldName+' changed his name to: '+objName.name +'...'}]);
  });

  socket.on('userTyping', (user) => {    
       
    console.log(user);
    if(user.user!==name)
      setTyping(true)
  });

  

  function sendMessage(msg){
    setTyping(false)
    socket.emit('userSendMessage', { message: {"titleColor":randomColor,"username":name,"message":msg}});
    textInput.current.value='';
  }
return (  
  <div className={styles.ChatDetail}>  
  
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
          <button className='btn btn-primary btn-xs' onClick={() => {
            setName(username.current.value);
            socket.emit('updateName', { oldName:name,name: username.current.value});
            username.current.value='';
            setOpen(!open);
            
            }}>Set name</button>     
      </Col>       
          
      </Collapse>  
    </Row>
    
    <Col className='messagesWrapper'>
    
          
    {state.map((value, index) => {

        if(value.root){

        }else{}
        return <div className={"speech-bubble animated" + (value.root ? ' root' : ' ')} key={index}>
        <Avatar name={value.username} size="40" round={true} />
          <span className='userName' style={{color:'#'+value.titleColor}}>{value.username}</span> 
          <span className='message'>
          <i className={'fa fa-moon-o' + (!value.root ? ' invisible' : ' ')} ></i>
          {value.message}
          </span>            
          <Moment fromNow>{value.date}</Moment>   
        </div>
      })}         
      
           
    
            
      <Form autoComplete="off" inline>      
      <div className={"userTyping" + (typing===false ? ' invisible' : ' ')}>
      <span className='pull-left'>{name} IS TYPING</span>
      <Lottie height={40}
              width={40}
        
          options={{
            animationData: animation,
            
          }}
        />
      
      </div>
        <Form.Label htmlFor="inlineFormInputName2" srOnly>
          Name
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Type message ..."  
          onKeyPress={handleKeyPress}
          ref={textInput}             
        />
        <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
          Username
        </Form.Label>

        <Dropdown className='emojiContainer'>
          <Dropdown.Toggle id="dropdown-basic">
           <i className='fa fa-smile-o'></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">
            <Picker onEmojiClick={onEmojiClick} />
            </Dropdown.Item>            
          </Dropdown.Menu>
        </Dropdown>
        
        <Button onClick={() => sendMessage(textInput.current.value)} className="mb-2">
          Send
        </Button>
      </Form> 
    </Col>
  </Container>   
  </div>  
);

}  


ChatDetail.propTypes = {};

ChatDetail.defaultProps = {
  
};

export default ChatDetail;
