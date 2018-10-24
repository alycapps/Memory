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
    const { score, highScore } = this.state;
      if (score < highScore) {
        this.setState({
          score: score + 1
        })
        this.shuffle()
      }
      else {
        this.setState({
          score: score + 1,
          highScore: highScore + 1
        })
        this.shuffle()
      }
    console.log("clicked pic")
    console.log(score)
  };
  
  shuffle = () => {
    const loc = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for (let i = 0; i < 14; i++) {
        let x = Math.floor(Math.random() * 14) + 1;
        let v = loc.indexOf(x);
        while (v >= 0) {
            x = Math.floor(Math.random() * 14) + 1;
            v = loc.indexOf(x);
        }
        loc[i] = x;
    }
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