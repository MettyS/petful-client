import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import petImage from '../images/pets.jpg'

class LandingPage extends Component {
  render() {
    return (
      <div className='LandingPage'>
        <h2>Adopt Pets</h2>
        <img src={petImage} alt='pets'/>
        <Link to='/adoption'>
          <button type='button' className='btn'>Start Adopting</button>
        </Link>
        <div className='petful-description'>
          <p>Petful is a project simulating a pet adoption process. </p>
          <p>Insert your name in a queue and wait for your turn to adopt a pet.</p>
        </div>

      </div>
    )
  }
}

export default LandingPage;