import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      {id: 'asd', name: 'Rahad', age: 27},
      {id: 'ase', name: 'Oishy', age: 26},
      {id: 'asf', name: 'Mazhar', age: 28}
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

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id; // Match the exact ID of which persons name being changing
    });
    
    // Make a copy of the matched person name
    const person = {
      ...this.state.persons[personIndex]
    };

    //get the new person name value from the input
    person.name = event.target.value;
    
    // Overwrite the persons name with new value
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // Set the new state with new person
    this.setState({persons: persons });

  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice;
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }

  render() {

    const vstyle = [];
    if(this.state.persons.length <= 2) {
      vstyle.push( classes.red );
    }
    if(this.state.persons.length <= 1) {
      vstyle.push( classes.bold );
    }

    let persons = null;
    let btnClass = '';

    if(this.state.showPerson) {
      persons = (
        <div>
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.changeNameHandler} />
            
        </div>
      );
      btnClass = classes.clicked;
    }

    return (
        <div className={classes.App}>

          {persons}
          
        </div>
    );
  }
}

export default App;
