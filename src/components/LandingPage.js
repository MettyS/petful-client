import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
      <div className='LandingPage'>
        <h2>Adopt Pets</h2>
        <div>meaningful image</div>
        <Link to='/adoption'>
          <button type='button' className='btn'>Start Adopting</button>
        </Link>

      </div>
    )
  }
}

export default LandingPage;