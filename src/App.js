import React,{Component} from 'react';
import { link , Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Welcome from './components/Welcome'
import Logout from './components/Logout'
import Map from './components/Map'
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {

  render(){
    return (
      <Router>
      <Switch>
      <Route path="/welcome/:username" component={Welcome}  />
      <Route exact path="/" component={Login} />
      <Route path="/logout" component={Logout}/>
      <Route path="/map" component={Map} />
      </Switch>
      </Router>
    );
  }
}

export default App;
