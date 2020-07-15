import React from 'react';
import { Nav } from 'react-bootstrap';
import ScrollableFeed from 'react-scrollable-feed'
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { NavLink } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {  
  return (
    <ScrollableFeed forceScroll={true}>
    <div className='moons-wrapper'>    
      <Header />
      <Main />      
      <div id='footer-mobile' className='d-block d-sm-none'>
      <Nav justify 
                
        >
          <Nav.Item>            
            <NavLink
            exact              
              to='/'
            >
            <i className="fa fa-home"></i>
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink                
                to='/chat'
              >
              <i className="fa fa-comments"></i>
                Chat
              </NavLink>
          </Nav.Item>
          <Nav.Item>            
            <NavLink                        
              to='/dashboard'
            >
            <i className="fa fa-tachometer"></i>
              Dashboard
            </NavLink>
          </Nav.Item>          
        </Nav>
      </div>          
    </div> 
    </ScrollableFeed>     
  );
}

export default App;
