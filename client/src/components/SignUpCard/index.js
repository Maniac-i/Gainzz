import React from 'react';


function SignUpCard(props) {


    return(
        <div className="card card-signin flex-row my-5">
                        <div className="card-img-left d-none d-md-flex">
                        </div>
                        <div className="card-body">

                        <h1 className="card-title text-center">Sign up</h1>
                        <form className="form-signin">
                            <div className="form-label-group">
                            <input type="text" id="inputUserame" className="form-control" placeholder="Username" required autofocus/>
                            <label for="inputUserame"></label>
                            </div>
            
                            <div className="form-label-group">
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required/>
                            <label for="inputEmail"></label>
                            </div>
                            
                            <hr/>
            
                            <div className="form-label-group">
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                            <label for="inputPassword"></label>
                            </div>
            
                            <button className="btn btn-lg btn-dark btn-block text-uppercase" type="submit">Register</button>
                            <a className="d-block text-center mt-2 small" href="/signin">Sign In</a>
                        </form>
                        </div>
                    </div>
    )
}

export default SignUpCard;

