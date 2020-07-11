import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import moons from '../../moons.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Form, Nav, NavDropdown, FormControl, Button , Dropdown} from 'react-bootstrap';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.Header}>
  <Navbar bg="#fff" expand="lg">
  <Container>
  <Navbar.Brand href="/">
  <img src={moons} alt='Moons Logo' />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
  <Nav.Link className={styles.Header}  href="/">Home</Nav.Link>
  <Nav.Link  className={'link'} href="/chat">Chat</Nav.Link>
  <Nav.Link href="/dashboard">Dashboard</Nav.Link>      
  </Nav>   
  <Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    Random User
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <Form inline>
      <FormControl type="text" placeholder="Set Username" className="mr-sm-2" />
      <Button variant="primary">Hi!</Button>
    </Form>
  </Dropdown.Menu>
</Dropdown> 
  </Navbar.Collapse>
  </Container>
  </Navbar>    
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
