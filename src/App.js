import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import index from './test/index.js';
import './App.css';

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={index}/>
    </React.Fragment>
  </Router>
)

export default App
