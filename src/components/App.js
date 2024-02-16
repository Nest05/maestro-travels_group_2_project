import About from "./About";
import Details from "./Details";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
// import AddDestinationForm from "./AddDestinationForm";
import Login from "./Login";
import SearchBar from "./SearchBar"; 
import { useState, useEffect } from "react";
import "./app.css";
import { NavLink } from 'react-router-dom'
import AddDestinationForm from "./AddDestinationForm";
import Register from "./Register";


function App() {
  const [jsonData, setJsonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/destinations");
        if (!response.ok) {
          throw new Error("Database Network Error");
        }
        const myJsonData = await response.json();
        setJsonData(myJsonData);
      } catch (error) {
        console.error("Error Fetching...", error);
      }
    };
    fetchData();
  }, []);

   useEffect(() => {
    setSearchTerm(""); // Reset searchTerm on component mount or page reload
  }, []);
  
   const filteredData = jsonData.filter(item => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  return (
    <div className="App">
      <header className="header">
      <NavLink to={'/'} >
      <h2>Maestro Travels</h2>
      </NavLink>
      <Navbar />
      </header>
      <Switch>
        <Route exact path="/">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Home jsonData={filteredData} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/destination_form">
          <AddDestinationForm />
        </Route>
        <Route exact path={`/:id`}>
          <Details jsonData={filteredData} />
        </Route>
        <Route exact path="/:id">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
