import React, {Component} from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import Content from './components/content';
import Home from './components/home';

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route path = "/home">
            <Home />
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

