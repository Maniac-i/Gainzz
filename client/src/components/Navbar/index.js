import React from "react";
import './style.css'
import { Link } from "react-router-dom"


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="navbar-brand">
                <img src={`${process.env.PUBLIC_URL}/logo-blk.png`} width="150" height="50" alt="gainz logo" style={{opacity: "0.7"}}/>
              </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/home">Home
                      <span className="sr-only">(current)</span>
                    </Link>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    My Gainzz
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item">Workouts</Link>
                    <Link class="dropdown-item">Create Workout</Link>
                  </div>
                </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">Log Out</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;