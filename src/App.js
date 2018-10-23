import React, { Component } from 'react';
import './App.css';
// import Card from "./components/card";
// import doctors from "./doctors.json";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Doctorlist from "./components/doctorlist"

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       <Navbar />
//       <Jumbotron />
//       {/* <br></br> */}
//         {/* <Card doctors={doctors} /> */}
//         <Doctorlist />
//       </div>
//     );
//   }
// }

const App = () => (
  <div>
    <Navbar />
    <Jumbotron />
    <Doctorlist />
  </div>
)

export default App;
