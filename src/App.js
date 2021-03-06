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

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: 'Cezary', age: 27 },
        { name: newName, age: 42 }
      ]
    })
  }

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 27 },
        { name: 'Grzes', age: 42 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button 
          onClick={() => this.switchNameHandler('Kolarek')}> 
          Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Muppet')}>
          Im children props
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          changed={this.nameChangedHandler}/>
      </div>
    );
  }
}

export default App;