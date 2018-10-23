import React from "react";

const styles = {
  card: {
    margin: 0
  }
}

const Card = props => (
  <div className="col-sm-3">
      <div className="card" style={styles.card} >
      <img value="1" className="card-body" src={props.image} alt={props.name} onClick={props.handleClick}/>
      </div>
  </div>
);

export default Card;