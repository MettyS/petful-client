import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import faker from 'faker';

import LandingPageRoute from '../routes/LandingPageRoute';
import AdoptionRoute from '../routes/AdoptionRoute';

import PetfulApiService from '../services/petful-api-service';

class App extends Component {

  state = {
    pets: {
      cats: [],
      dogs: []
    },
    people: [],
    loading: true
  }

  componentDidMount = () => {
    if(!this.state.loading)
      return;

    let tempState = {
      pets: {
        cats: [],
        dogs: []
      },
      people: [],
      clientUser: '',
      displayCongrats: '',
      interval: null,
      loading: false
    }

    PetfulApiService.getPets()
      .then(res => {
        tempState.pets = {...res};

        PetfulApiService.getPeople()
          .then(res => {
            tempState.people = res;

            this.setState({...tempState})
          })
          .catch(er => {
            console.log('PEOPLE FETCH ERROR: ', er);
          })
      })
      .catch(er => {
        console.log('PET FETCH ERROR: ', er);
      });
  }

  toggleLoading = () => {
    this.setState({loading: true});
  }

  adopt = (animalType) => {
    Promise.all([PetfulApiService.deletePet(animalType), PetfulApiService.removePerson()])
      .then( resAr => {
        const tempState = {
          pets: {
            cats: animalType === 'cat' ? this.state.pets.cats.slice(1) : [...this.state.pets.cats],
            dogs: animalType === 'dog' ? this.state.pets.dogs.slice(1) : [...this.state.pets.dogs]
          },
          people: this.state.people.slice(1),
        }

        this.setState({
          ...tempState
        })
      })
      .catch( er => {
        console.log(er);
      })
  }

  handleAdoptionClick = (animalType) => {

    const animalName = animalType === 'dog' ? this.state.pets.dogs[0].name : this.state.pets.cats[0].name;


    this.adopt(animalType);
    this.stopInterval();
    this.setState({
      clientUser: '',
      displayCongrats: animalName
    })
  }

  startInterval = () => {
    const interval = setInterval( () => {
      if(this.state.people[0] === this.state.clientUser){

      }
      else {
        const rand = Math.round(Math.random());
        const animalType = rand ? 'cat' : 'dog';
        this.adopt(animalType);
      }

      if(this.state.people.length < 5) {
        const randPerson = faker.name.findName();
        this.handleNewAdopter(randPerson, false);
      }
    }, 5000)

    this.setState({interval: interval})
  }

  stopInterval = () => {
    clearInterval(this.state.interval);

    this.setState({interval: null});
  }

  handleNewAdopter = (person, isClient) => {

    PetfulApiService.postPerson(person)
      .then(res => {
        let tempClientUser = isClient ? person : this.state.clientUser

        if(isClient && !this.state.interval) {
          this.startInterval();
        }

        //this.toggleLoading();
        this.setState({
          people: [...this.state.people, person],
          clientUser: tempClientUser
        })
      })
      .catch(er => {
        console.log(er);
      })
  }

  render = () => {
    const {pets, people, clientUser, displayCongrats} = this.state;

    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path={'/'} render={() => <LandingPageRoute />}  />
            <Route path={'/adoption'} render={() => <AdoptionRoute handleNewAdopter={(person, isClient) => this.handleNewAdopter(person, isClient)} pets={pets} people={people} clientUser={clientUser} handleAdoptionClick={(type) => this.handleAdoptionClick(type)} displayCongrats={displayCongrats} />} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;