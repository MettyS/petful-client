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

    this.props.handleNewAdopter(person, true)
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
  // handleAdoptButtonClick = (e) => {
  //   e.preventDefault();
    
  // }

  renderAdoptDogButton = (shouldRender) => {
    return shouldRender ? (
      <button type='button' className='btn' onClick={() => {this.props.handleAdoptionClick('dog')}} >Adopt!</button>
    )
    : ''
  }

  renderAdoptCatButton = (shouldRender) => {
    return shouldRender ? (
      <button type='button' className='btn' onClick={() => {this.props.handleAdoptionClick('cat')}} >Adopt!</button>
    )
    : ''
  }

  renderAdoptionCongrats = (animalName) => {
    return animalName === '' ? '' 
      : <p>{`Congrats and thank you for adopting ${animalName}!`}</p>
  }

  render() {
    const { dogs, cats } = this.props.pets;
    const { people, clientUser, displayCongrats } = this.props

    const currentDogInfo = dogs[0];
    const currentCatInfo = cats[0];
    const buttonsShouldRender = people[0] === clientUser;

    console.log('buttonsShouldRender: ', buttonsShouldRender);
    console.log('clientUser: ', clientUser)

    const dogCard = this.renderDogCard(currentDogInfo);
    const catCard = this.renderCatCard(currentCatInfo);
    const adoptionQueue = this.renderAdopterQueue(people);
    const inputArea = this.renderEnterLineForm();

    const dogButton = this.renderAdoptDogButton(buttonsShouldRender);
    const catButton = this.renderAdoptCatButton(buttonsShouldRender);
    const congratsMessage = this.renderAdoptionCongrats(displayCongrats);


    return (
      <div className='AdoptionPage'>
        Queue:
        {adoptionQueue}
        {inputArea}
        {congratsMessage}
        
        {dogCard}
        {dogButton}

        {catCard}
        {catButton}
      </div>
    )
  }
}

export default AdoptionPage;