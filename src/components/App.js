
import './App.css';
import Details from './Details';
import Home from './Home';
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react';

const y = 10; 

function App() {

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

  return (
    <Switch>
      <Route exact path="/">
      <Home jsonData={jsonData} />
      </Route>
      <Route path={`/:id`}>
        <Details jsonData={jsonData}/>
      </Route>
    </Switch>
  );
}

export default App;
