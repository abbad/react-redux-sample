// HomeContainer.jsx
import React from 'react';
import { Link } from 'react-router';

export default class About extends React.Component {
  render() {
    return (<div><p>Home </p>
            <Link to="/get-started"><p>Get Started</p></Link>
          </div>);
  }
}
