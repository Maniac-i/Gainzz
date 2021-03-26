import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignUp from "./pages/Signup/Signup";
import SignIn from "./pages/SignIn/Signin";
import Homepage from './pages/Homepage/index';
import './App.css';
import { useAuthTokenStore } from "./utils/auth";

function App() {

  useAuthTokenStore();

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SignUp}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path='/home' component={Homepage} />
        </Switch>
      </div>
  </Router>
  );
}

export default App;
