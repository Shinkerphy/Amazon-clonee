import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault(); ///prevents refresh
        auth
          .signInWithEmailAndPassword(email, password)
          .then((auth) => {
              //redirect to homePage
              history.push("/");
          })
          .catch((e) => alert(e.message));
    };

    const register = (event) => {
        event.preventDefault(); ///prevents refresh
        auth
           .createUserWithEmailAndPassword(email, password)
           .then((auth) => {
               //create a user and logged in
               history.push("/");
           })
           .catch((e) => alert(e.message));
    };

    return (
        <div className="login"> 
        <Link to="/">
            <img
               className="login_logo"
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
               alt=""
            />
        </Link>

          <div className="login_container">
            <h1>Sign in</h1>
            <form>
              <h5>E-mail</h5>
              <input value={email} onChange={(event) => setEmail(event.target.value)} type="email"/> 
              <h5>Password</h5>
              <input onChange={(event) => setPassword(event.target.value)} value={password} type="password"/>
              <button onClick={login} className="login_signIn_button">Sign In</button> 
            </form> 
            <p>
             By signing-in you agree to Amazon's Conditions of Use & Sale.
             Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.   
            </p> 
            <button onClick={register} className="login_register_button">Create your Amzazon Account</button> 
          </div>  
       </div>
    );
}

export default Login;

