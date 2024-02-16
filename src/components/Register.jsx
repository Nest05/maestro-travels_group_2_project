import React, { useState, useEffect } from "react";
import "./Register.css"

const Register = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const [registrationError, setRegistrationError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [existingUsers, setExistingUsers] = useState([]);

  useEffect(() => {
    const fetchExistingUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/users");
        if (!response.ok) {
          throw new Error("Failed to fetch existing users");
        }
        const existingUsersData = await response.json();
        setExistingUsers(existingUsersData);
      } catch (error) {
        console.error("Error fetching existing users:", error);
        setRegistrationError("Failed to fetch existing users. Please try again.");
      }
    };
    fetchExistingUsers();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = async () => {
    if (!validateEmail(userData.email)) {
      setRegistrationError("Please enter a valid email address");
      return;
    }

    // Check if email is already registered (client-side check)
    if (existingUsers.some(user => user.email === userData.email)) {
      setRegistrationError("An account with this email already exists. Please log in instead.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });
      if (!response.ok) {
        throw new Error("Failed to register user");
      }
      console.log("User registered successfully");
      setIsRegistered(true);
    } catch (error) {
      console.error("Error registering user:", error);
      setRegistrationError("Failed to register user. Please try again.");
    }
  };

  if (isRegistered) {
    return (
      <div className="register">
        <h1>Registration Successful</h1>
        <p>You have successfully registered. Please proceed to log in.</p>
      </div>
    );
  }

  return (
    <div className="register">
      <h1>Signup</h1>
      <br />
      <label htmlFor="email">Email:</label>
      <br />
      <input
        name="email"
        type="email"
        placeholder="Enter email"
        value={userData.email}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <br />
      <input
        name="password"
        type="password"
        placeholder="Enter password"
        value={userData.password}
        onChange={handleChange}
      />
      <br />
      {registrationError && <p style={{ color: "red" }}>{registrationError}</p>}
      <button onClick={handleRegister}>Signup</button>
    </div>
  );
};

export default Register;
