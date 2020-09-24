import React, { useState } from 'react';
import './CreateAccount.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';


function CreateAccount() {
    const history = useHistory();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    
    const register = (event) => {
        event.preventDefault(); ///prevents refresh
        auth
           .createUserWithEmailAndPassword(email, password)
           .then((auth) => {
               //eslint-plugin-react-hooks plugin
               history.push("/");
           })
           .catch((e) => alert(e.message));
    };

    return (
        <div className="createAccount"> 
        <Link to="/">
            <img
               className="createAccount__logo"
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
               alt=""
            />
        </Link>

          <div className="createAccount__container">
            <h1>Create account</h1>
            <form>
              <h5>Your name</h5>
              <input type="text"/>
              <h5>E-mail</h5>
              <input value={email} onChange={(event) => setEmail(event.target.value)} type="email"/> 
              <h5>Password</h5>
              <input onChange={(event) => setPassword(event.target.value)} value={password} type="password"/>
              <h5>Re-enter Password</h5>
              <input onChange={(event) => setPassword(event.target.value)} value={password} type="password"/>
              <button onClick={register} className="createAccount__register__button">Create your Amazon Account</button>    
            </form> 
            <p>
              By creating an account you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.   
            </p> 
          </div>  
       </div>
    );
}

export default CreateAccount;