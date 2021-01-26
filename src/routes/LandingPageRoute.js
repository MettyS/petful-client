import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LandingPage from '../components/LandingPage';

class LandingPageRoute extends Component {
  render() {
    return (
      <div className='main-wrapper'>
        <Link to='/'>
          <h1>Petful</h1>
        </Link>
        <LandingPage />
      </div>
    )
  }
}

export default LandingPageRoute;