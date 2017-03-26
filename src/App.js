import React, { Component } from 'react';

import './App.css';

import Home from './components/home';
import About from './components/about';
import Top from './components/top';
import NoMatch from './components/no-match';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/top">Top</Link></li>
            </ul>

            <hr/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/top" component={Top}/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
