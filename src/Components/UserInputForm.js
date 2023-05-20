import React from "react";
import Button from "./UI/Button";
const UserInputForm = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>User Name</label>
              <input type="text" placeholder="enter user name" />
      </div>
      <div>
        <label>Age</label>
        <input type="number" placeholder="enter user age"/>
          </div>
          <Button/>
    </form>
  );
};

export default UserInputForm;
