import React, { useState } from "react";
import Button from "./UI/Button";
import Modal from 'react-modal';
import Modal1 from "./Modals/Modal1";
const UserInputForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("on clicked");
    console.log(age)
    console.log(name)
    if (age ===0 && name.length === 0) {
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
  }
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            placeholder="enter user name"
            onChange={onNameChangeHandler}
            value={name}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            placeholder="enter user age"
            min={0}
            onChange={onAgeChangeHandler}
            value={age}
          />
        </div>
        <Button>Submit</Button>
      </form>
      <Modal isOpen={isModalOpen}>
        <Modal1 onClick={setModalToFalse} />
        </Modal>
    </div>
  );
};

export default UserInputForm;
