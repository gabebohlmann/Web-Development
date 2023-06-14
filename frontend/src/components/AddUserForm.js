import React, { useState } from 'react';
import axios from 'axios';

function AddUserForm({ setReload }) {  // Accept the setReload function as a prop
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', user);
      setUser({ name: '', email: '', password: '' }); // Clear the form
      setReload((reload) => !reload); // Toggle the "reload" state variable to cause the parent component to re-render
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={user.email} onChange={handleInputChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={user.password} onChange={handleInputChange} />
      </label>
      <input type="submit" value="Add User" />
    </form>
  );
}

export default AddUserForm;