import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return;
    }
    if (+enteredUserAge < 0) {
      return;
    }
    console.log(enteredUserName, enteredUserAge);
    setEnteredUserAge("");
    setEnteredUserName("");
  };
  const userNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const userAgeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={userNameHandler}
        />
        <label htmlFor="username">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredUserAge}
          onChange={userAgeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
