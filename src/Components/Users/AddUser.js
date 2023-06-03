import React, { useState } from "react";
import Button from "../UI/Button";
import Card from '../UI/Card'
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState()
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)'
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'please enter a valid age (>0)'
      })
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value.trim());
  };

  const errorHandler = () => {
    setError(null);
  }
  
  return (
    <div>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <div>
            <label htmlFor="username">User Name</label>
            <input
              id="username"
              type="text"
              placeholder="enter user name"
              onChange={usernameChangeHandler}
              value={enteredUsername}
            />
          </div>
          <div>
            <label htmlFor="userage">Age (Years)</label>
            <input
              id="userage"
              type="number"
              placeholder="enter user age"
              onChange={ageChangeHandler}
              value={enteredAge}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
