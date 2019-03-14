import React from 'react';
import styles from './cockpit.module.css';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = styles.red;
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(styles.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(styles.bold);
    }

    return (
        <div className={styles.Cockpit}>
            <h1>This is my React app</h1>
            <p className={assignedClasses.join(" ")}>This is working :)</p>
            <button className={btnClass} onClick={props.clicked}>
            Toggle persons
            </button>
        </div>
    );
};

export default cockpit;
