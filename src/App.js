import React from 'react';
import {nanoid} from 'nanoid'

import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = React.useState([])

  const submitHandler = (userName, userAge) => {
    setUsersList(previousUser => {
      return [{user: userName, age: userAge, key: nanoid()}, ...previousUser]
    })
  }

  return (
    <div>
      <AddUser submitHandler={submitHandler} />
      {usersList.length > 0 && <UsersList users={usersList}/>}
    </div>
  );
}

export default App;
