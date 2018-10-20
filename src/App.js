import React, { Component } from 'react';
import './App.css';
import Card from "./components/card";
import doctors from "./doctors.json";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Jumbotron />
      <br></br>
        <Card doctors={doctors} />
      </div>
    );
  }
}

export default App;
