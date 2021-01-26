import React, { Component } from 'react';
import AdoptionPage from '../components/AdoptionPage';

class AdoptionRoute extends Component {

  componentDidMount = () => {
    // const { pets, people } = this.props
    // console.log('component did mount with props: ', this.props)
    // this.setState({pets: {...pets}, people: people})
  }

  render() {
    const { pets, people } = this.props


    return (
      <div className='main-wrapper'>
        <AdoptionPage handleNewAdopter={(person) => this.props.handleNewAdopter(person)} pets={pets} people={people} />
      </div>
    )
  }
}

export default AdoptionRoute;