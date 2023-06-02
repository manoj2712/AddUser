import React, { useState } from "react";
import Button from "../UI/Button";
import Card from '../UI/Card'
import classes from './AddUser.module.css';

import Modal from "react-modal";
import Modal1 from "../Modals/Modal1";

const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("on clicked");
    console.log(age);
    console.log(name);
    if (age === 0 && name.length === 0) {
      setIsModalOpen(true);
    }
    setAge(0);
    setName("");
  };
  const onAgeChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const onNameChangeHandler = (event) => {
    setName(event.target.value.trim());
    console.log(name);
  };
  const setModalToFalse = () => {
    setIsModalOpen(false);
  };
  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <div>
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          type="text"
          placeholder="enter user name"
          onChange={onNameChangeHandler}
          value={name}
        />
      </div>
      <div>
        <label htmlFor="userage">Age (Years)</label>
        <input
          id="userage"
          type="number"
          placeholder="enter user age"
          min={0}
          onChange={onAgeChangeHandler}
          value={age}
        />
      </div>
      <Button type="submit">Add User</Button>
      </form>
      </Card>
  );
};

export default AddUser;
