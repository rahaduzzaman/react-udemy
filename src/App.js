import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Rahad', age: 27},
      {name: 'Oishy', age: 26},
      {name: 'Mazhar', age: 28}
    ],
    showPerson : false
  }

  personToggleHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState( {
      showPerson : !doesShow
    } ); 
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

    const btnStyle = {
      background : 'white',
      color : '#222',
      padding : '8px',
      border : '1px solid #d5e6e5',
      fontSize : '15px'
    }

    let persons = null;

    if(this.state.showPerson) {
      persons = (
        <div>
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
      )
    }

    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <button style={btnStyle} onClick={this.personToggleHandler}>Switch name</button>
        {persons}
      </div>
    );
  }
}

export default App;
