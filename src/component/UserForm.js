import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {  Button, Typography, Paper, Box, TextField } from "@mui/material";
import Users from "./Users";

const UserForm = () => {
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users", formData);
      setResponse(res.data.message);
      setFormData({ name: "", email: "", age: "" });
      navigate("/user");
    } catch (error) {
      setResponse("Error submitting data");
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "20px",
        maxWidth: "400px",
        margin: "30px auto",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        User Details Form
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          type="number"
          fullWidth
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Submit
        </Button>
      </Box>
      {response && (
        <Typography
          variant="body1"
          align="center"
          sx={{
            marginTop: "20px",
            color: response.includes("Error") ? "error.main" : "success.main",
          }}
        >
          {response}
        </Typography>
      )}
    </Paper>
  );
};

export default UserForm;
