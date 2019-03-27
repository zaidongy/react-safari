import React, { useEffect, useRef, useContext } from "react";
import styles from "./cockpit.module.css";
import AuthContext from "../../context/auth-context";

const cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  console.log(authContext);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
    // setTimeout(() => {
    //   alert("Saved data to the cloud");
    // }, 1000);

    toggleBtnRef.current.click();

    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  let btnClass = "";
  if (props.showPersons) {
    btnClass = styles.showPersons;
  }

  const assignedClasses = [];
  if (props.personsLength <= 2) {
    assignedClasses.push(styles.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is working :)</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle persons
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(cockpit);
