import './App.css';
import React, { useState } from 'react';
import Person from './Person/Person.js'

const App = props => {
  const [peopleState, setPeopleState] = useState({
    persons: [
      { name: 'Cezary', age: 26 },
      { name: 'Grzes', age: 40 }
    ]
  });

  // Array destructuring - useState() returns an array with exactly two elemenents:
  // 1. My current state value
  // 2. A method to update my state value
  // 'peopleState' could be any data of my choice (obj, array, string etc);


  const [otherState, setOtherState] = useState({otherStateXD: 'other state :D'});
  // Its a good practice to use useState calls more times bcs actually its not merging other values together
  // for example if my first useState has sth more than persons object I have to remember to pass it too in switchNameHandler 
  // during manipulating setPeopleState (bcs it will be lost);

  console.log(peopleState, otherState);

  const switchNameHandler = () => {
    setPeopleState({
      persons: [
        { name: 'Cezary', age: 27 },
        { name: 'Grzes', age: 42 }
      ],
    })
  };

  return (
    <div className="App">
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={peopleState.persons[0].name} age={peopleState.persons[0].age}>Im children props</Person>
      <Person name={peopleState.persons[1].name} age={peopleState.persons[1].age} />
    </div>
  );

  // switchNameHandler without '()' bcs I only pass a reference to the method;
}

export default App;
