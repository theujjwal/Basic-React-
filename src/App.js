import React,{useState} from 'react';
import Addusers from './components/Users/Addusers';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);
  const addUsersHandler = (uName,uAge) => {
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name:uName,age:uAge}]
    })
  }
  return (
    <div>
      <Addusers onAddUser={addUsersHandler}></Addusers>
      <UsersList user={usersList}></UsersList>

    </div>
  );
}

export default App;
  