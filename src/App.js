import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Person from './Person/Person';

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

    const btnStyle = {
      background : 'green',
      color : '#fff',
      padding : '8px',
      border : '1px solid #d5e6e5',
      fontSize : '15px',
      ':hover' : {
        background: 'lightgreen',
        color:'black'
      }
    }

    const vstyle =[];
    if(this.state.persons.length <= 2) {
      vstyle.push('red');
    }
    if(this.state.persons.length <= 1) {
      vstyle.push('bold');
    }

    let persons = null;

    if(this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              click = {this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              change = {(event) => {this.changeNameHandler(event, person.id)}} />
          })}
        </div>
      )

      btnStyle.background = 'red';
      btnStyle[':hover'] = {
        background: 'salmon',
        color: 'black'
      }
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I am a react app</h1>
          <button style={btnStyle} onClick={this.personToggleHandler}>Switch name</button>

          <p className={vstyle.join(' ')}>This is working</p>

          {persons}
          
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
