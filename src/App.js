import React, {Component} from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import Content from './components/content';
import Home from './components/home';
import Profile from './components/profile';
import Edit from './components/edit';
import AddPet from './components/add-pet';

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route path = "/home">
            <Home />
          </Route>
          <Route path = "/profile">
            <Profile />
          </Route>
          <Route path = "/edit">
            <Edit />
          </Route>
          <Route path = "/add">
            <AddPet />
          </Route>
          <Route path = "/">
            <Content />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;

