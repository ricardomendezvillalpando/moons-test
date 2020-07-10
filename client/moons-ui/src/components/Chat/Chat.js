import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Chat.module.css';


const Chat = () => (
  <Container className={styles.Chat}>
    <Row>
      <Col>
        <h1>CHAT Page</h1>                     
      </Col>
    </Row>
  </Container>  
);

Chat.propTypes = {};

Chat.defaultProps = {};

export default Chat;
