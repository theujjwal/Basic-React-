import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.css'

export default function UsersList(props) {
  return (
    <Card className={classes.users}   >
    <ul>
        {props.user.map(user => <li>{user.name}({user.age} years old)</li>)}



    </ul>
    </Card>
  )
}