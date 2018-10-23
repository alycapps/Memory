import React from "react";

const styles = {
  jumbo: {
    textAlign: "center",
    backgroundImage: `url(${"./images/milky-way.jpg"})`,
    color: "#82E0AA",
  },
  directions: {
    color: "#AED6F1"
  },
  score: {
    // color: "#D2B4DE",
    color: "white",
    fontSize: 30
  },
  quote: {
    color: "#F9E79F"
  }
}

const Jumbotron = props => (
  <div>
    <div className="jumbotron jumbotron-fluid" style={styles.jumbo}>
      <div className="container">
        <h1 className="display-4">Doctor Who Memory</h1>
        <h3 style={styles.directions}>Take your time and try to click all of the Doctors without clicking a regeneration twice!</h3>
        <br></br>
        <p className="lead" style={styles.quote}>"People assume that time is a strict progression of cause to effect, but actually, from a nonlinear, non-subjective viewpoint, it's more like a big ball of wibbly-wobbly, timey-wimey...stuff"</p>
        <h4 style={styles.score}>Score: {props.state.score} | Top Score: {props.state.highScore} </h4>
      </div>
    </div>
  </div>
);

export default Jumbotron;