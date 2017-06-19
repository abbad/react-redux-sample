// insert into index.js
import About from './containers/AboutContainer.jsx';
import FormContainer from './containers/FormContainer.jsx';

import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/get-started">Get Started</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr/>

          <Route path="/get-started" component={FormContainer}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

render(<App/>, document.getElementById('app'));
