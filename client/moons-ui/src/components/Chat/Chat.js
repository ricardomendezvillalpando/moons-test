import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, ListGroup, Media, Form, Button, InputGroup, FormControl} from 'react-bootstrap';
import styles from './Chat.module.css';

const Chat = () => (
  <Container className={styles.Chat}>
    <Row>
      
      <Col xs={12}>
        <h6>MESSAGES</h6>  
        holi               
      </Col>
      <Col xs={12}>
      <Form inline>
  <Form.Label htmlFor="inlineFormInputName2" srOnly>
    Name
  </Form.Label>
  <Form.Control
    className="mb-2 mr-sm-2"
    id="inlineFormInputName2"
    placeholder="Type Message@=!!!"
  />
  <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
    Username
  </Form.Label>
  
  <Button type="submit" className="mb-2">
    Send
  </Button>
</Form> 
      </Col>
    </Row>
  </Container>  
);

Chat.propTypes = {};

Chat.defaultProps = {};

export default Chat;
