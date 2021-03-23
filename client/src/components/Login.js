import React, { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    // Get the helper login function from the `useLogin` hook.
    const login = useLogin();

    const handleSubmit = async e => {
        e.preventDefault();

        const email = username.current.value;
        const password = password.current.value;

        try {

            await login({ email, password });

            // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.

        } catch(err) {

             // Handle error responses from the API
             if( err.response && err.response.data ) console.log(err.response.data);

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="text" ref={emailRef} placeholder="Your email" /><br />
            <input type="password" ref={passwordRef} placeholder="Your password" /><br />
            <button>Submit</button>
        </form>
    )

}

export default LoginForm;
