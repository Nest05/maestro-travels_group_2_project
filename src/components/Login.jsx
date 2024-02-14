import React, {useEffect, useState} from "react";
import AddDestinationForm from "./AddDestinationForm";
const url = "http://localhost:3000/users"

const Login = () =>{

    const [users, setUsers] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState([]);
    const [userData, setUserData] = useState({
        username: "",
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
        const userExists = users.some(user => user.username === userData.username && user.password === userData.password);
        if (userExists){
            setIsLoggedIn(true)
        }else{
            setLoginError("Incorrect username or password")
        }
    }

    return (
        <div>
            {!isLoggedIn ?

                (<div>
                <label htmlFor="login"></label>
                <br />
                <input 
                    name="username"
                    type="text" 
                    placeholder="Enter username"
                    value={userData.username} 
                    onChange={handleChange}
                />
                <br />
                <input 
                    name="password"
                    type="password" 
                    placeholder="Enter username" 
                    value={userData.password}
                    onChange={handleChange} 
                />
                <br />
                {loginError && <p style={{color: "red"}}>{loginError}</p>}
                <button onClick={confirmPassword}>Continue</button>
            </div>
            ):(
                <AddDestinationForm tourGuide={userData.username} />
            )
            }
        </div>
    )
}

export default Login