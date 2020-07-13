import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.css';
import { Switch, Route } from "react-router-dom";
import Landing from "../Landing/Landing";
import Dashboard from "../Dashboard/Dashboard";
import ChatDetail from "../ChatDetail/ChatDetail";

const Main = () => (
  <div className={styles.Main}>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/chat" component={ChatDetail} />      
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  </div>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
