import React from "react";

const Card = props => (
  <wrapper>
    {props.doctors.map( item => (
      <div className="card" >
        <img className="card-img-top" src={item.image} alt={item.name} />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
    ))}
  </wrapper>
);

export default Card;