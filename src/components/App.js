import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      isLoading: false
    }

    PetfulApiService.getPets()
      .then(res => {
        console.log(res);
        tempState.pets = {...res};

        PetfulApiService.getPeople()
          .then(res => {
            console.log(res);
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
    console.log('toggle loading running');
    this.setState({loading: true});
  }

  handleNewAdopter = (person) => {

    PetfulApiService.postPerson(person)
      .then(res => {
        console.log(res);

        this.toggleLoading();
      })
      .catch(er => {
        console.log(er);
      })
  }

  render = () => {
    const {pets, people} = this.state;

    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path={'/'} render={() => <LandingPageRoute />}  />
            <Route path={'/adoption'} render={() => <AdoptionRoute handleNewAdopter={(person) => this.handleNewAdopter(person)} pets={pets} people={people}/>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;