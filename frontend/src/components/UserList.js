import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddUserForm from './AddUserForm';

function UserList() {
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [reload]);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      setReload((reload) => !reload);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <AddUserForm setReload={setReload} /> 
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
            <button onClick={() => deleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;