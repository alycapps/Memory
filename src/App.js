import React, { Component } from 'react';
import './App.css';
import Card from "./components/card"
import doctors from "./doctors.json"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card doctors={doctors} />
      </div>
    );
  }
}

export default App;
