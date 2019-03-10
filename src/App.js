import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Person from "./Person/Person";

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
    switchNameHandler = newName => {
        this.setState({
            persons: [
                { name: newName, age: "25" },
                { name: "Max", age: "28" },
                { name: "Rob", age: "35" }
            ]
        });
    };

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
        const style = {
            backgroundColor: "green",
            color: "white",
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer"
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={event =>
                                    this.nameChangedHandler(event, person.id)
                                }
                            />
                        );
                    })}
                </div>
            );

            style.backgroundColor = "red";
        }

        const classes = [];

        if (this.state.persons.length <= 2) {
            classes.push("red");
        }
        if (this.state.persons.length <= 1) {
            classes.push("bold");
        }

        return (
            <div className="App">
                <h3>This is my React app</h3>
                <p className={classes.join(" ")}>This is working :)</p>
                <button style={style} onClick={this.togglePersonsHandler}>
                    Toggle persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
