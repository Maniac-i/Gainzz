import React from "react";

function SignInCard(props) {

    return (
        <div className="card card-signin flex-row my-5">
                        <div className="card-img-left d-none d-md-flex">
                        </div>
                        <div className="card-body">
                           
                        <h5 className="card-title text-center">Sign In</h5>
                        <form className="form-signin">
                            <div className="form-label-group">
                            <input type="text" id="inputUserame" className="form-control" placeholder="Username" required autofocus/>
                            <label for="inputUserame"></label>
                            </div>
            
                            <div className="form-label-group">
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                            <label for="inputPassword"></label>
                            </div>

                            <hr/>
            
                            <button className="btn btn-lg btn-dark btn-block text-uppercase" type="submit">Login</button>
                            <a className="d-block text-center mt-2 small" href="/">Sign up</a>
                        </form>
                        </div>
                    </div>
    )
}
export default SignInCard;