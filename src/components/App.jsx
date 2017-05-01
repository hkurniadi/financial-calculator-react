import React, {Component} from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';

class App extends Component {
  render () {
    return (
      <div>
        <h1>Simple Financial Calculator</h1>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;