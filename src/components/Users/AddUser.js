import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredUserAge < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserAge("");
    setEnteredUserName("");
  };
  const userNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const userAgeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };
  const errorHandler=()=>{
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} errorContent={errorHandler} />}
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
    </div>
  );
};

export default AddUser;
