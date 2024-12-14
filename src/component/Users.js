import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  // Fetch users from the backend API
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/AllUser");
      setUsers(response.data);
    } catch (err) {
      setError("Error fetching users");
    }
  };

  // Load users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Typography variant="h4" align="center" gutterBottom>
        User List
      </Typography>
      {error && (
        <Typography variant="body1" color="error" align="center" gutterBottom>
          {error}
        </Typography>
      )}
      {users.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>Age</strong></TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.age}</TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="body1" align="center">
          No users found. Add a user to see the list.
        </Typography>
      )}
    </div>
  );
};

export default Users;
