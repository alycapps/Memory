import React, { Component } from "react";
import doctors from "../doctors.json"
import Card from "./card"
import Jumbotron from "./jumbotron"

class DoctorList extends Component {
  state = {
    doctors: doctors,
    score: 0,
    highScore: 0,
  };
  // function for checking if doctor was already clicked
  handleDoctorClick = event => {
    console.log(event.target)
    let click = event.target.click;
    console.log(click)
    if (click === "true") {
      this.setState({
        score: 0
      })
      console.log("click is true")
      this.shuffle(doctors);
    }
    else {
      click=true;
      console.log("click is false")
      this.handleAddPoint();
    }
  };
  // function for changing score and top score
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
  // function to shuffle cards
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
              handleClick={this.handleDoctorClick}
            />
          ))}
        </div>
      </div>
    )
  }
};

export default DoctorList;