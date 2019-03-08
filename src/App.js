import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = { 
		persons : [
			{ name : "Chris", age : "25"},
			{ name : "Max" , age : "28" },
			{ name : "Rob" , age : "32" }
		],
		otherState: "Some other value"
	 }

	switchNameHandler = newName => {
		this.setState({
			persons : [
				{ name : newName, age : "25"},
				{ name : "Max" , age : "28" },
				{ name : "Rob" , age : "35" }
			],
		});
		
	}

	nameChangedHandler = (event) => {
		// console.log(event);
		this.setState({
			persons : [
				{ name : "Chris", age : "25"},
				{ name : event.target.value , age : "28" },
				{ name : "Rob" , age : "35" }
			],
		});
	}

	render() { 
		return ( 
		<div className="App">
			<h3>This is my React app</h3>
			<p>This is working :)</p>
			<button onClick={() => this.switchNameHandler("Christopher!!")}>Switch Name</button>
			<Person 
				name={this.state.persons[0].name} 
				age={this.state.persons[0].age} />
			<Person 
				name={this.state.persons[1].name} 
				age={this.state.persons[1].age}
				click={this.switchNameHandler.bind(this, "Christopher :)")}
				changed={this.nameChangedHandler}
			>My hobbies: Overwatch</Person>
			<Person 
				name={this.state.persons[2].name} 
				age={this.state.persons[2].age}  />
		</div>
		 );
	}
}
 
export default App;
