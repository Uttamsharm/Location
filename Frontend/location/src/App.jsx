import React, { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import Footer from "./components/Footer";
import "./styles.css";

const API_URL = "http://localhost:5000/api/users";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(API_URL);
    setUsers(response.data);
  };

  return (
    <div>
      <h1>CRUD Application</h1>
      <UserForm fetchUsers={fetchUsers} />
      <UserList users={users} fetchUsers={fetchUsers} />
      <Footer />
    </div>
  );
}

export default App;
