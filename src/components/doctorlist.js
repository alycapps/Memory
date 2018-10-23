import React, { Component } from "react";
import doctors from "../doctors.json"
import Card from "./card"

class DoctorList extends Component {
  state = {
    doctors: doctors,
    score: 0,
    highScore: 0
  };

  handleAddPoint = event => {
    const { score } = this.state;
    this.setState({
      score: score + event.target.value
    })
    console.log("clicked pic")
  };

  render() {
    return (
      <div>
        {this.state.doctors.map( doctor => (
          <Card 
            image={doctor.image}
            id={doctor.id}
            name={doctor.name}
            handleClick={this.handleAddPoint}
          />
        
        ))}
      </div>
    )
  }
};

export default DoctorList;