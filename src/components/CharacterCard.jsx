import React from 'react'
import "../assets/styles/components/CharacterCard.scss";

const CharacterCard = ({product}) => {
    return (
        <div
        className="List__Card"
      >
        <img src={product.image} alt={product.name} />
        <div className="List__Card__info">
          <h2>{product.name}</h2>
          <div className="Card__info">
          <p>
              <span>{product.status}</span>
              <span>{product.species}</span>
              <span>{product.gender}</span>
              </p>
              <p>
              
              <span>{product.origin.name}</span>
              </p>
          </div>
        </div>
      </div>
    )
}

export default CharacterCard
