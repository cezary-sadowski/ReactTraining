import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm inside h1</h1>
        <p>Same here!</p>
        <Person name="Cezary" age="26">Im children props</Person>
        <Person name="Grzes" age="40"/>
      </div>
    );
  }
}

export default App;
