import React, { useRef } from 'react';
import { useLogin, useAuthenticatedUser } from "../../utils/auth";
import api from '../../utils/register-api';
import { Redirect, useHistory } from 'react-router-dom';



function SignUpCard(props) {

        const history = useHistory();

        function redirectHome() {
            history.push("/home");
        }

        const emailRef = useRef();
        const passwordRef = useRef();
        const usernameRef = useRef();
    
        // Get the helper login function from the `useLogin` hook.
        const login = useLogin();
    
        const handleSubmit = async e => {
            e.preventDefault();
    
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            const username = usernameRef.current.value;
    
            try {
    
                // Register the user.
                await api.register({ email, password, username });
    
                // User has been successfully registered, now log them in with the same information.
                await login({ email, password, username });
    
                // User has been successfully registered, logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.
                console.log("I did it:", user);
                redirectHome();

            } catch(err) {
    
                 // Handle error responses from the API. This will include
                 if( err.response && err.response.data ) console.log(err.response.data);
    
            }

        }
        const user = useAuthenticatedUser();

    return(
        <div className="card card-signin flex-row my-5">
                        <div className="card-img-left d-none d-md-flex">
                        </div>
                        <div className="card-body">

                        <h1 className="card-title text-center">Sign up</h1>
                        <form className="form-signin">
                            <div className="form-label-group">
                            <input type="text" ref={usernameRef} id="inputUserame" className="form-control" placeholder="Username" required autoFocus/>
                            <label htmlFor="inputUserame"></label>
                            </div>
            
                            <div className="form-label-group">
                            <input type="email" ref={emailRef} id="inputEmail" className="form-control" placeholder="Email address" required/>
                            <label htmlFor="inputEmail"></label>
                            </div>
                            
                            <hr/>
            
                            <div className="form-label-group">
                            <input type="password" ref={passwordRef} id="inputPassword" className="form-control" placeholder="Password" required/>
                            <label htmlFor="inputPassword"></label>
                            </div>
            
                            <button className="btn btn-lg btn-dark btn-block text-uppercase" 
                            type="submit" onClick={handleSubmit}>Register</button>
                            <a className="d-block text-center mt-2 small" href="/signin">Sign In</a>
                        </form>
                        </div>
                    </div>
    )
}

export default SignUpCard;

