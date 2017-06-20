// HomeContainer.jsx

import React from 'react'
import { Link } from 'react-router'

export default class About extends React.Component {
  render() {
    return (<div><p>Home </p>
            <Link to="/getting-started"><p> Getting Started</p></Link></div>);
  }
}
