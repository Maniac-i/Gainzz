import React from 'react';
import Navbar from '../../components/Navbar';

function Signup () {

    return (
        <div>
            <Navbar/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                    <div className="card card-signin flex-row my-5">
                        <div className="card-img-left d-none d-md-flex">
                        </div>
                        <div className="card-body">
                            <img className="img-fluid max-width: 100%; height: auto;" src={`${process.env.PUBLIC_URL}/logo-blk.png`} alt="Free Weights"/>
                        <h5 className="card-title text-center">Sign up</h5>
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
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Signup;