import React, { Component } from 'react';
import PetCard from './PetCard';

class AdoptionPage extends Component {

  renderCatCard = (cat) => {
    return <PetCard pet={cat} />
  }

  renderDogCard = (dog) => {
    return <PetCard pet={dog} />
  }

  renderAdopterQueue = (people) => {
    const nameTags = people.map( (person, i ) => <li key={i} className='nameTag'>{person}</li>)

    return (
      <ol>{nameTags}</ol>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = e.target;
    const person = name.value;

    this.props.handleNewAdopter(person)
  }

  renderEnterLineForm = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='name-input' className='form-label'>
              Enter The Line: 
            </label>
            <input
              required
              id='name-input'
              placeholder='Your name'
              name='name'
            />
        <button type='submit' className='btn'>Join The Line</button>
      </form>
    )
  }

  render() {
    const { dogs, cats } = this.props.pets;
    const people = this.props.people

    const currentDogInfo = dogs[0];
    const currentCatInfo = cats[0];

    const dogCard = this.renderDogCard(currentDogInfo);
    const catCard = this.renderCatCard(currentCatInfo);
    const adoptionQueue = this.renderAdopterQueue(people);
    const inputArea = this.renderEnterLineForm();


    return (
      <div className='AdoptionPage'>
        Adoption page!
        {adoptionQueue}
        {inputArea}

        {dogCard}
        {catCard}
      </div>
    )
  }
}

export default AdoptionPage;