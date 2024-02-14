import About from "./About";
import Details from "./Details";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AddDestinationForm from "./AddDestinationForm";
import Login from "./Login";
import SearchBar from "./SearchBar"; 
import { useState, useEffect } from "react";
import { DiAptana } from "react-icons/di";
import { FiMenu } from "react-icons/fi";

const y = 10;

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
        console.log(myJsonData);
        setJsonData(myJsonData);
      } catch (error) {
        console.error("Error Fetching...", error);
      }
    };
    fetchData();
  }, []);
  
   const filteredData = jsonData.filter(item => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home jsonData={jsonData} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/destination-form">
          <AddDestinationForm />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path={`/:id`}>
          <Details jsonData={jsonData} />
        </Route>
        <Route exact path="/:id">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
