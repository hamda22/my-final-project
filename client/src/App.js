import React from 'react';
import Home from './views/homepageComponents/Home';
import './views/homepageComponents/Home.css'
import SignupPage from './views/SignUpComponent/signupPage'
import './views/SignUpComponent/signupPage.css'
import Navbar from './views/navbarComponents/navbar'
import './views/navbarComponents/navbar.css'
import LoginPage from './views/SignInComponent/LoginPage';
import './views/SignInComponent/LoginPage.css'
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';



function App() {
  return (
    <Router>
  <Navbar/>
  <Switch>
  <>
    <Route path='/' exact  component={Home}/>
    <Route path='/SignIn'   component={LoginPage}/>
    <Route path='/SignUp'   component={SignupPage}/>
    

 </>
 </Switch>
  </Router>
  );
}
export default App;
