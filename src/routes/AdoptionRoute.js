import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdoptionPage from '../components/AdoptionPage';

class AdoptionRoute extends Component {


  render() {
    const { pets, people, clientUser, displayCongrats } = this.props


    return (
      <div className='main-wrapper'>
        <Link to='/'>
          <h1>Petful</h1>
        </Link>
        <AdoptionPage handleNewAdopter={(person, isClient) => this.props.handleNewAdopter(person, isClient)} pets={pets} people={people} clientUser={clientUser} handleAdoptionClick={(type) => this.props.handleAdoptionClick(type)} displayCongrats={displayCongrats}/>
      </div>
    )
  }
}

export default AdoptionRoute;