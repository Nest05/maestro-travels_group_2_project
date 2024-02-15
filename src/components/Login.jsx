import React, {useEffect, useState} from "react";
import AddDestinationForm from "./AddDestinationForm";
import DisplayReviews from "./DisplayReviews"; 
import './login.css';
const url = "http://localhost:3000/users"


const Login = () =>{


    const [users, setUsers] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState([]);
    const [userData, setUserData] = useState({
        tourGuide: "",
        password: ""
    })

    const handleChange = event =>{
        const {name, value} = event.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value,
        }))
    }

    useEffect(() =>{
        const fetchUsers = async () =>{
            try{
                const response = await fetch(url);
                const data = await response.json();
                setUsers(data)
            }catch(err){
                console.log(err)
            }
        }
        fetchUsers()
    }, [])

    const confirmPassword = () =>{
        const userExists = users.some(user => user.username === userData.tourGuide && user.password === userData.password);
        if (userExists){
            setIsLoggedIn(true)
        }else{
            setLoginError("Incorrect username or password")
        }
    }
    return (
        <>
            {!isLoggedIn ?
                (<div className="login">
                <div>
                <h1>Sign in</h1>
                <h4>to continue to Add Destination</h4>
                <label htmlFor="login"></label>
                <br />
                <h5>Email:</h5>
                <input 
                    name="tourGuide"
                    type="text" 
                    placeholder="Enter email"
                    value={userData.tourGuide} 
                    onChange={handleChange}
                />
                <br />
                <h5>Password:</h5>
                <input 
                    name="password"
                    type="password" 
                    placeholder="Enter password" 
                    value={userData.password}
                    onChange={handleChange} 
                />
                <br />
                {loginError && <p style={{color: "red"}}>{loginError}</p>}
                <button onClick={confirmPassword}>Login</button>
                </div>
            </div>
            ):(
                <>
                <AddDestinationForm tourGuide={userData.tourGuide} />
                <DisplayReviews facilityGuide={userData.tourGuide} />
                </>
            )
            }
        </>
    )
}

export default Login
