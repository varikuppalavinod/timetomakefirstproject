
import react,{useState} from"react";
import Card from"../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal"
const AddUser=(props)=>{

    const[Username,setUsername]=useState("")
    const[Age,setAge]=useState("")
    const[error,setError]=useState("")

    const SubmitHandler=(event)=>{
        event.preventDefault()
        if(Username.trim().length===0||Age.trim().length===0){
            setError({
                title:"invalid input",
                message:"please enter a valid name and age (non-empty values)"
            })
            return;
        }
        if(+Age<1){
            setError({
                title:"invalid input",
                message:"please enter a valid age(>0)"
            })
            return;
        }
        props.onAddUser(Username,Age)
        //console.log({Username,Age})
        setUsername("");
        setAge("");
    }
    const usernamechangehandler=(event)=>{
        setUsername(event.target.value)
      
    }
    const agechangehandler=(event)=>{
          setAge(event.target.value)
    }
    const errorhandler=()=>{
      setError(null)
    }

    
    return (
        <div>
        <div className={classes.backdrop}>
      
           <Card className={classes.input}>
            <form onSubmit={SubmitHandler}>
                <label htmlFor="username">UserName :</label>
                <input type="text" id="username" value={Username} onChange={usernamechangehandler}></input>

                <label htmlFor="userage">Age :</label>
                <input type="number" id="userage" value={Age} onChange={agechangehandler}></input>

                <Button type="submit">Add User </Button>
            </form>
            {error &&<ErrorModal title={error.title} message={error.message} onConfirm={errorhandler}/>}
            </Card>
            
            </div>
            </div>
        
    )
}
export default AddUser;


/*
import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
     <ErrorModal title="An error occured!" message="Something went wrong!" />
      <Card className={classes.input}>
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
*/