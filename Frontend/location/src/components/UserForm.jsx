import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

function UserForm({ fetchUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_URL, { name, email });
    fetchUsers();
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
