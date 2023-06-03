import React from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';
import { useState } from 'react';

function App() {
  const [usersList, setusersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setusersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id:Math.random()}];
    })
  }
  return (
    <div>
      <AddUser onAddUser= {addUserHandler } />
      <UserList users={usersList} />
      </div>
  );
}

export default App;
