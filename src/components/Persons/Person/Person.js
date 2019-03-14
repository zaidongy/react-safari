import React from "react";
import "./Person.css";

const person = props => {
    // Error module
    // const rnd = Math.random();
    // if(rnd > 0.8) {
    //     throw new Error('Something went wrong');
    // }
    
    return (
        <div className="Person">
            <p onClick={props.click}>
                I am {props.name} and I am {props.age} years old!
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;