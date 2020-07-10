import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.css';
import { Switch, Route } from "react-router-dom";
import Landing from "../Landing/Landing";
import Chat from "../Chat/Chat";
import Dashboard from "../Dashboard/Dashboard";

const Main = () => (
  <div className={styles.Main}>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/chat" component={Chat} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </div>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
