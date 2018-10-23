import React, { Component } from "react";
import doctors from "../doctors.json"
import Card from "./card"
import Jumbotron from "./jumbotron"

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
    console.log(score)
    this.shuffle()
  };
  
  shuffle = () => {

  };

  render() {
    return (
      <div>
        <Jumbotron state={this.state}/>
        <div className="row">
          {this.state.doctors.map( doctor => (
            <Card 
              image={doctor.image}
              id={doctor.id}
              name={doctor.name}
              handleClick={this.handleAddPoint}
            />
          ))}
        </div>
      </div>
    )
  }
};

export default DoctorList;