import React, { useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function App() {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();

  // Piece of code which runs base on a given condition useEFFECT ~~Powerful
  useEffect(() => {
     const unsubscribe = auth.onAuthStateChanged((authUser) => {
       if (authUser) {
         ///user is logged in
         dispatch({
           type: "SET_USER",
           user: authUser,
         })
       } else {
         //user is logged out...
         dispatch({
          type: "SET_USER",
          user: null,
        });
       }
     });

     return () => {
       //Any cleanup operations goes in here..
       unsubscribe();
     };
  }, []);

  console.log('user is >>', user);


  return (
    <Router>
     <div className="App">
       <Switch>
         <Route path="/checkout">
           <Header />
           <Checkout />
         </Route>
         <Route path="/login">
           <Login />
         </Route>
         <Route path="/">
           <Header />
          <Home />
         </Route>
       </Switch>
     </div>
    </Router>   
  );
}

export default App;
