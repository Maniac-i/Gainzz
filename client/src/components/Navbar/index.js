import React from "react";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
                <img src={`${process.env.PUBLIC_URL}/logo-blk.png`} width="150" height="50" alt="gainz logo" style={{opacity: "0.7"}}/>
              </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home
                      <span className="sr-only">(current)</span>
                    </a>
                </li>
              <li className="nav-item">
                <a className="nav-link" href="/signin">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Sign Up</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;