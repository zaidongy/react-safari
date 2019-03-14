import React, { Component } from "react";
// import logo from './logo.svg';
import styles from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "asdf", name: "Chris", age: "25" },
      { id: "asdfasdf", name: "Max", age: "28" },
      { id: "asdfasdfasdf", name: "Rob", age: "32" }
    ],
    otherState: "Some other value",
    showPersons: false
  };

  // Handlers
  nameChangedHandler = (event, id) => {
    // console.log(event.target);

    // Find the index based on id
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // create a copy of the person from the state
    const person = {
      ...this.state.persons[personIndex]
    };
    // Update the copy with the new event value
    person.name = event.target.value;
    // person.name = event.input.value;

    // Create a copy persons state
    const persons = [...this.state.persons];
    // Update the index of the persons copy
    persons[personIndex] = person;

    // Call set state to update the vDOM
    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  deletePersonHandler = index => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  // Render
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={styles.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
