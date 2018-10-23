import React from "react";

// const Navbar = () => (
//   <div>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">Memory Game</a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item active">
//             <div>Score: | Top Score: 
//               <span className="sr-only">(current)</span>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   </div>
// );

const styles = {
  n: {
    textAlign: "right"
  }
}


const Navbar = () => (
  <div className="nav">
    <h4 >Memory Game</h4>
    <div style={styles.n}>
      Score: | Top Score:
    </div>
  </div>
);

export default Navbar;