import React, { useRef } from "react";
import { useLogin } from '../../utils/auth';

function SignInCard(props) {

    const emailRef = useRef();
    const passwordRef = useRef();

    // Get the helper login function from the `useLogin` hook.
    const login = useLogin();

    const handleSubmit = async e => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {

            await login({ email, password });

            // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.

        } catch(err) {

             // Handle error responses from the API
             if( err.response && err.response.data ) console.log(err.response.data);

        }
    }

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
            
                            <button className="btn btn-lg btn-dark btn-block text-uppercase" type="submit" onSubmit={handleSubmit}>Login</button>
                            <a className="d-block text-center mt-2 small" href="/">Sign up</a>
                        </form>
                        </div>
                    </div>
    )
}
export default SignInCard;