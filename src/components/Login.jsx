import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import AddDestinationForm from "./AddDestinationForm";
import DisplayReviews from "./DisplayReviews";
import './login.css';

const url = "http://localhost:3000/users";
const INACTIVE_TIMEOUT = 20000; // 2 minutes in milliseconds

const Login = () => {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [userData, setUserData] = useState({
    tourGuide: "",
    password: ""
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const handleUserActivity = () => {
      localStorage.setItem("lastActivityTime", Date.now());
    };

    // Add event listeners for user activity
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("mousedown", handleUserActivity);
    window.addEventListener("keypress", handleUserActivity);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("mousedown", handleUserActivity);
      window.removeEventListener("keypress", handleUserActivity);
    };
  }, []);

  useEffect(() => {
    const checkLoginStatus = () => {
      const storedTourGuide = localStorage.getItem("tourGuide");
      const storedLastActivityTime = localStorage.getItem("lastActivityTime");

      if (storedTourGuide && storedLastActivityTime) {
        const inactiveDuration = Date.now() - parseInt(storedLastActivityTime);
        if (inactiveDuration < INACTIVE_TIMEOUT) {
          setIsLoggedIn(true);
        }
      }
    };

    checkLoginStatus();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const confirmPassword = () => {
    const userExists = users.some(
      (user) =>
        user.email === userData.tourGuide && user.password === userData.password
    );
    if (userExists) {
      setIsLoggedIn(true);
      localStorage.setItem("lastActivityTime", Date.now());
      localStorage.setItem("tourGuide", userData.tourGuide); // Store tourGuide data in local storage
      setLoginError("");
    } else {
      setLoginError("Incorrect username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("lastActivityTime");
    localStorage.removeItem("tourGuide");
    setUserData({
        tourGuide: "",
        password: ""
    });
  };

  useEffect(() => {
    let logoutTimer;

    const checkActivity = () => {
      const lastActivityTime = localStorage.getItem("lastActivityTime");
      if (lastActivityTime) {
        const inactiveDuration = Date.now() - parseInt(lastActivityTime);
        if (inactiveDuration >= INACTIVE_TIMEOUT) {
          handleLogout();
        } else {
          // Reset the logout timer
          clearTimeout(logoutTimer);
          logoutTimer = setTimeout(handleLogout, INACTIVE_TIMEOUT - inactiveDuration);
        }
      }
    };

    const storedLastActivityTime = localStorage.getItem("lastActivityTime");
    if (storedLastActivityTime) {
      const inactiveDuration = Date.now() - parseInt(storedLastActivityTime);
      if (inactiveDuration < INACTIVE_TIMEOUT) {
        // Set the logout timer
        logoutTimer = setTimeout(handleLogout, INACTIVE_TIMEOUT - inactiveDuration);
      }
    }

    const activityInterval = setInterval(checkActivity, 1000);

    return () => {
      clearInterval(activityInterval);
      clearTimeout(logoutTimer);
    };
  }, []);

  return (
    <div className="containlogin">
      {!isLoggedIn ? (
        <div className="login">
          <div>
            <h1>Sign in</h1>
            <h4>to continue to Add Destination</h4>
            <label htmlFor="login"></label>
            <br />
            <input
              name="tourGuide"
              type="text"
              placeholder="Enter username"
              value={userData.tourGuide}
              onChange={handleChange}
            />
            <br />
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              value={userData.password}
              onChange={handleChange}
            />
            <br />
            {loginError && <p style={{ color: "red" }}>{loginError}</p>}
            <button onClick={confirmPassword}>Continue</button>
          </div>
        </div>
      ) : (
        <>
          <button onClick={handleLogout} className="logout">Logout</button>
          <AddDestinationForm tourGuide={userData.tourGuide} />
          <DisplayReviews facilityGuide={userData.tourGuide} /> 
        </>
      )}
    </div>
  );
};

export default Login;
