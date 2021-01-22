import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      { name: 'Cezary', age: 26 },
      { name: 'Grzes', age: 40 }
    ]
  }

  switchNameHandler = () => {
    //dont change state directly like state.person[0].name = '...' ! it doesnt work and its not good at all.

    this.setState({
      persons: [
        { name: 'Cezary', age: 27 },
        { name: 'Grzes', age: 42 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Im children props</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
    );
  }
}

export default App;
