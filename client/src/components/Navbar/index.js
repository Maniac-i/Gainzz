import React from "react";
import './style.css'


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
                    <a className="nav-link" href="/home">Home
                      <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    My Gainzz
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item">Workouts</a>
                    <a class="dropdown-item">Create Workout</a>
                  </div>
                </li>
              <li className="nav-item">
                <a className="nav-link" href="/signin">Log Out</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;