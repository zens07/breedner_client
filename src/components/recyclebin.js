import React, {Component} from 'react';
import Content from './components/content';
import Home from './components/home';

class App extends Component {
  render(){
    return(
      <div>
        {/* <Content /> */}
        <Home />
      </div>
    );
  }
}

export default App;