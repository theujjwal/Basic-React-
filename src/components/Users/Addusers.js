import React,{useState} from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'

export default function Addusers(props) {
  const [enteredUsername, setEnteredUsername] =  useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const addUserHandler = (event)=>{
    event.preventDefault()

    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
      return
    }
    if(+enteredAge<1){
      return
    }
    props.onAddUser(enteredUsername,enteredAge);
    setEnteredUsername('')
    setEnteredAge('')
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }
  
  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername}></input>
        <label htmlFor="Age">Age</label>
        <input id="Age" type="text" onChange={ageChangeHandler} value={enteredAge}></input>
        <Button type='submit'>Add User</Button>


    </form>
    </Card>
  )


}
