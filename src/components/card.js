import React from "react";

const styles = {
  card: {
    width: "25%",
    margin: 0
  }
}

const Card = props => (
  <div>
      <div className="card col-sm-4" style={styles.card} >
      <img value="1" className="card-body" src={props.image} alt={props.name} onClick={props.handleClick}/>
        {/* <div className="card-body"> */}
          {/* <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p> */}
        {/* </div> */}
      </div>
  </div>
);

export default Card;