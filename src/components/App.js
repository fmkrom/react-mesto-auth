import '../index.css';

import FrontPage from './FrontPage/FrontPage.js';
import Footer from "./Footer.js";

import Login from "./LogIn/Login.js";
import Register from "./Register/Register";

import ProtectedRoute from './ProtectedRoute/ProtectedRoute.js';

import { Route, Switch } from 'react-router-dom';

let isUserLoggedIn = false;

function App() {
  return (
    <div className="body">
      <div className="page">
           <Switch>
              
              <ProtectedRoute
                component={FrontPage}
                path="/mesto"
                loggedIn={isUserLoggedIn}
              />

              <Route path="/login">
                <Login />
              </Route>

              <Route path="/register">
                <Register />
              </Route>    

           </Switch>  

           <Footer />

      </div>
    </div>
  );
}

export default App;
