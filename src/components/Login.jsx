import React, { useEffect, useState } from "react";
import AddDestinationForm from "./AddDestinationForm";
import DisplayReviews from "./DisplayReviews";

const url = "http://localhost:3000/users";
const INACTIVE_TIMEOUT = 120000; // 2 minutes in milliseconds

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
        user.username === userData.tourGuide && user.password === userData.password
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
    })
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

    const storedTourGuide = localStorage.getItem("tourGuide");
    if (storedTourGuide) {
      setUserData((prevData) => ({
        ...prevData,
        tourGuide: storedTourGuide 
      }));
    }

    const storedLastActivityTime = localStorage.getItem("lastActivityTime");
    if (storedLastActivityTime) {
      const inactiveDuration = Date.now() - parseInt(storedLastActivityTime);
      if (inactiveDuration < INACTIVE_TIMEOUT) {
        setIsLoggedIn(true);
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
    <div>
      {!isLoggedIn ? (
        <div>
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
      ) : (
        <>
          <button onClick={handleLogout}>Logout</button>
          <AddDestinationForm tourGuide={userData.tourGuide} />
          <DisplayReviews facilityGuide={userData.tourGuide} /> 
        </>
      )}
    </div>
  );
};

export default Login;
