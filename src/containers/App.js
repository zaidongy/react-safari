import React, { Component } from "react";
import styles from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Auxillary";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextprops, nextState) {
    console.log("[App.js] shouldComponentupdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidupdate");
  }

  state = {
    persons: [
      { id: "asdf1", name: "Chris", age: 25 },
      { id: "asdf2", name: "Max", age: 28 },
      { id: "asdf3", name: "Rob", age: 32 }
    ],
    otherState: "Some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
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
    this.setState((prevState, props) => ({
      persons: persons,
      changeCounter: prevState.changeCounter + 1
    }));
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deletePersonHandler = index => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  // Render
  render() {
    console.log("[App.js] render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: !this.state.showCockpit });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, styles.App);
