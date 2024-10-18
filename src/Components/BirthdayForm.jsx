import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  Tooltip,
} from "@mui/material";

const BirthdayForm = () => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

    useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedBirthday = localStorage.getItem("birthday");

    if (savedName) setName(savedName);
    if (savedBirthday) setBirthday(savedBirthday);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const birthDate = new Date(birthday);

    if (!name || !birthday) {
      setError("Both fields are required!");
      return;
    }

    setError("");

    localStorage.setItem("name", name);
    localStorage.setItem("birthday", birthday);

    if (birthDate > today) {
      navigate(`/countdown?name=${name}&date=${birthday}`);
    } else if (
      birthDate.getMonth() === today.getMonth() &&
      birthDate.getDate() === today.getDate()
    ) {
      navigate(`/birthdayWish?name=${name}`);
    }
  };

  const handleNavigateCountdown = () => {
    navigate("/countdown");
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center pl-[30rem] pt-[10rem]"
      style={{ backgroundImage: 'url(./birthday.webp)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Container maxWidth="sm" className="absolute z-10">
        <Box className="p-20 bg-white shadow-lg rounded-lg mx-auto bg-opacity-80">
          <Typography
            variant="h5"
            component="h1"
            className="text-center mb-10 font-bold text-gray-700"
          >
            Birthday Countdown Form
          </Typography>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Tooltip title="Enter the person's name" arrow placement="top">
                <TextField
                  id="name"
                  label="Person's Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  required
                  error={Boolean(error && !name)}
                  helperText={error && !name ? "Please enter a valid name" : ""}
                  className="transition duration-300 ease-in-out transform hover:scale-105"
                  InputProps={{
                    className:
                      "p-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500",
                  }}
                />
              </Tooltip>
            </div>
            <div>
              <Tooltip
                title="Select the person's birthdate"
                arrow
                placement="top"
              >
                <TextField
                  id="birthday"
                  label="Birthday"
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  fullWidth
                  required
                  error={Boolean(error && !birthday)}
                  helperText={
                    error && !birthday ? "Please select a valid date" : ""
                  }
                  className="transition duration-300 ease-in-out transform hover:scale-105"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    className:
                      "p-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500",
                  }}
                />
              </Tooltip>
            </div>
            {error && (
              <Typography variant="body2" className="text-red-600 text-center">
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="bg-blue-600 text-white py-2 transition duration-300 ease-in-out hover:bg-blue-700 transform hover:scale-105"
            >
              Submit
            </Button>
            <Button
              type="button" 
              onClick={handleNavigateCountdown} 
              fullWidth
              variant="contained"
              className="bg-blue-600 text-white py-2 transition duration-300 ease-in-out hover:bg-blue-700 transform hover:scale-105"
            >
              Navigate to Countdown
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default BirthdayForm;
