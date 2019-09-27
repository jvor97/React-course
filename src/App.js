import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id: "apo12", name: "Julia", age: 22},
      {id: "akp45", name: "Jozko", age: 30}
    ],
    otherstate : "some other state",
    displayPerson: false
  }

  switchNameHandler = (newName) => {
  //  DO NOT DO THIS this.state.persons[0].name = 'Juliana';
  this.setState({
    persons : [
      {id: "apo12", name: newName, age: 22},
      {id: "akp45", name: "Jozko", age: 31}
    ]
  })
  }

  nameChangeHandler = (id, event) => {

    // !!!   when using bind event has to be on second place (id, event) not (event,id)  !!!!
    
    //getting index of current person
    const personIndex = this.state.persons.findIndex(per => {
      return per.id === id;   
      //  with findIndex u are looking for boolean and u are looking at every elemnt of an array- so here u are asking if the current id is the same as is the same as id obtained from change(person.id)
    })
    //ak by si to robila cez index tak toto nemusim robit ale hned pouzivas index

    //THINK THIS IS A LITTLE BIT CLEANER SOLUTION----------------
       //copy of persons made with ...
    const persons = [...this.state.persons]

    //defining current person
    const person = persons[personIndex];

    //assigning the value from input to the current person name
    person.name = event.target.value;

      this.setState({
        persons: persons
      });


      // ORIGINAL SOLUTION--------------------
    //defining current person !!remember to do copy with ...
    // const person = {
    //   ...this.state.persons[personIndex]
    // };

    // //assigning the value from input to the current person name
    // person.name = event.target.value;

    // //doing copy of persons array, not to modify the original
    //   const persons = [...this.state.persons]

    //   //here idk why check it
    //   persons[personIndex] = person;

    //   this.setState({
    //     persons: persons
    //   });
    }

    togglePersonHandler = () => {
      const currentDisplay = this.state.displayPerson;
      this.setState({
        displayPerson: !currentDisplay
      })
    }

    removePersonHandler = (index) => {
      const persons = [...this.state.persons];
      persons.splice(index, 1);
      this.setState({persons: persons});
    }

  render() {

    const buttonStyle = {
      padding: '10px',
      backgroundColor: 'green',
      color: 'white',
      borderRadius: '5px'
    }

    let parClasses = [];
    if (this.state.persons.length <= 2) {
      parClasses.push('red');
    }
    if (this.state.persons.length <= 1) {
      parClasses.push(' bold');
    }

    let person = null;
    if (this.state.displayPerson) {
     person = ( 
       <div> 
       {this.state.persons.map((person, index) => {
         return <Person name={person.name} age={person.age} click={this.removePersonHandler.bind(this,index)} key={person.id} change={this.nameChangeHandler.bind(this,person.id)}/>
        })}
        </div>
     )
     buttonStyle.backgroundColor = 'red';
    }

    return (
      <div className="App">
      <h1>Hi, I am a React app </h1>
      {/* <button onClick={this.switchNameHandler.bind(this,'Juliana')}>Change text</button> */}
      <button onClick={this.togglePersonHandler} style={buttonStyle}>Display or hide person</button>
      <p className={parClasses.join(' ')}>Text which change based on numbers of input.</p>
      {/* <Person name="Julia" age="22"/>
      <Person name="Jozko" age="30">My hobby is: gaming</Person> */}
    {person}
      </div>
    );
  }
}

export default App;
