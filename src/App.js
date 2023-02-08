import React, { useState } from "react";

import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((previousUsersList) => {
      return [
        //Math.random().thString() is pseudo method of achieving this.
        ...previousUsersList,
        //line 11 ...previousUsersList, the ... lets me copy all previous elements for the previousUsersList by pulling al elements out
        //of old array and creates a new array with the new element added
        { name: userName, age: userAge, id: Math.random().toString() },
        //I also use this to create new objects with name and age, every new user gets its own object, and objects are stored in the array
        //we add an id so that each entry is unique and has it's own unique key.
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;

//this module has access to both the AddUser component and UsersList component, so it will hold the logic to actually add a user
