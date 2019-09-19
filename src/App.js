import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name: "Julia", age: 22},
      {name: "Jozko", age: 30}
    ],
    otherstate : "some other state",
    displayPerson: false
  }

  switchNameHandler = (newName) => {
  //  DO NOT DO THIS this.state.persons[0].name = 'Juliana';
  this.setState({
    persons : [
      {name: newName, age: 22},
      {name: "Jozko", age: 31}
    ]
  })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons : [
        {name: 'Julia', age: 22},
        {name: event.target.value, age: 31}
      ]
    })
    }

    togglePersonHandler = () => {
      const currentDisplay = this.state.displayPerson;
      this.setState({
        displayPerson: !currentDisplay
      })
    }

  render() {
    return (
      <div className="App">
      <h1>Hi, I am a React app </h1>
      {/* <button onClick={this.switchNameHandler.bind(this,'Juliana')}>Change text</button> */}
      <button onClick={this.togglePersonHandler}>Display or hide person</button>
      {/* <Person name="Julia" age="22"/>
      <Person name="Jozko" age="30">My hobby is: gaming</Person> */}
    {
       this.state.displayPerson === true ? 
      <div >
      <Person click={this.switchNameHandler.bind(this,'Julianaaa')} name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} change={this.nameChangeHandler}>My hobby is: gaming</Person>
      </div>
       : null 
    }
      </div>
    );
  }
}

export default App;
