import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm inside h1</h1>
        <p>Same here!</p>
        <Person />
      </div>
    );

    //Other way but cumbersome:
    // return React.createElement('div', {className: 'App'}, 
    //   React.createElement('h1', null, ' I\'m inside h1'));
  }
}

export default App;
