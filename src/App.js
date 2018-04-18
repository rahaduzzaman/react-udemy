import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Rahad', age: 27},
      {name: 'Oishy', age: 26},
      {name: 'Mazhar', age: 28}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        {name: newName, age: 27},
        {name: 'Mrs. Rahad', age: 26},
        {name: 'Mazharul Islam', age: 27}
      ]
    } )
  }

  changeNameHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Rahad', age: 27},
        {name: event.target.value, age: 26},
        {name: 'Mazhar', age: 28}
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <button onClick={() => this.switchNameHandler('Mr Rahad!!')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Mr Rahad')} 
          change={this.changeNameHandler}> Rahad's wife
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>
        </Person>
      </div>
    );
  }
}

export default App;
