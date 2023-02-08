import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  //use State to update the State while the input is added and save what is entered in a State Variable
  //starting State will be an empty string, since the field is empty
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  //line 12-14 is array destructuring, it is used because "useState" returns an array with 2 elements. With the syntax
  //we pill those elements out and save them in 2 constants.
  //the first is the current state snapshot, every time component is rerendered, it will update the current state snapshot
  //the second holds a function that is called to change the first state, and trigger a rerender

  //addUserHandler has setEnteredUsername(""); & setEnteredAge(""); to reset input field to blank, along with the value in those fields
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      //the + in +enteredAge makes that input a number
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    //forwards entered data to App.js
    setEnteredUsername("");
    setEnteredAge("");
  };

  //usernameChangeHandler is triggered for every keystroke
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
    //errorHandler gives setError a false-y value so that the modal can be dismissed
    //onConfirm takes this to ErrorModal
  };

  return (
    //wrapped in extra div so two components were not side-by-side
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

//htmlFor links the input to the established label for username and age
//preventDefault stops a request being sent
//since I made the card, I obviously have to import it. I gave lines
//the built in button is wrapped by <Button></Button>. When I originally wrote this structure
//I used <button></button> and then created <Button></Button>

//I chose to add the ErrorModal component here since this is what would cause it to be called
//if statements have dynamic responses depending on what causes the modal to trip
