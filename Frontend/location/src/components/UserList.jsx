import React from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

function UserList({ users, fetchUsers }) {
  const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchUsers();
  };

  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          {user.name} - {user.email}
          <button onClick={() => deleteUser(user._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
