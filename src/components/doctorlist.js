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
  handleDoctorClick = event => {
    
  };
  handleAddPoint = event => {
    const { score, highScore } = this.state;
      if (score < highScore) {
        this.setState({
          score: score + 1
        })
        this.shuffle(doctors)
      }
      else {
        this.setState({
          score: score + 1,
          highScore: highScore + 1
        })
        this.shuffle(doctors)
      }
  };
  
  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
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