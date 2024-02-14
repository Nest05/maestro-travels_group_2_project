import About from "./About";
import "./App.css";
import Details from './Details';
import Home from './Home';
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import {  DiAptana } from "react-icons/di";
import { FiMenu } from "react-icons/fi";
import AddDestinationForm from "./AddDestinationForm";
import Login from "./Login";
import SearchBar from "./SearchBar";
import { useState, useEffect } from 'react';


function App() {
  /*
  - Include this state in the App.js
  */ 
  const [searchTerm, setSearchTerm] = useState("")

  const [jsonData, setJsonData] = useState([])

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch ("http://localhost:3005/destinations");
        if (!response.ok) {
          throw new Error("Database Network Error")
        }
        const myJsonData = await response.json();
        setJsonData(myJsonData)
      } catch (error){
        console.error("Error Fetching...", error)
      }
    }
    fetchData()
  },
  []);

  const filteredData = jsonData.filter(item => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="App">
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/">
            <Home jsonData={jsonData} />
          </Route>
          <Route exact path="/:id">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </Route>
          <Route path={`/:id`}>
            <Details jsonData={filteredData}/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/destination-form">
            <AddDestinationForm />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
