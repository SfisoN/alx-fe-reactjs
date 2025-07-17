import React, {useContext} from 'react'
import UserContext from './UserContext'

function UserDetails() {
  const user = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>{user.name}</h2>
      <p>Email: <span style={{ fontStyle: 'italic' }}>{user.email}</span></p>
    </div>
  );
}

export default UserDetails
