import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Dashboard.module.css';

const Dashboard = () => (
  <Container className={styles.Chat}>
    <Row>
      <Col>
        <h1>Dashboard Page</h1>                     
      </Col>
    </Row>
  </Container>  
);

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
