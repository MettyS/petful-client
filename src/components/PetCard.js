import React from 'react';

export default function PetCard({ pet }) {

  const cardContent = pet 
    ? (
      <>
        <div className='left-panel'>
          <h3 className='pet-info'>{pet.name}</h3>
          <div className='pet-info'>{`age  |  ${pet.age}`}</div>
          <div className='pet-info'>{`gender  |  ${pet.gender}`}</div>
          <div className='pet-info'>{`breed  |  ${pet.breed}`}</div>
          <div className='pet-info'>{`description  |  ${pet.description}`}</div>
          <div className='pet-info'>{`story  |  ${pet.story}`}</div>

        </div>
        <div className='right-panel'>
          <img src={pet.imageURL} alt={`picture_of_${pet.name}`} />
        </div>
      </>
    )
    : 'Loading...'

  return (
    <div className='PetCard'>
      {cardContent}
    </div>
  )
}
