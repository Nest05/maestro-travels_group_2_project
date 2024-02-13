
import './App.css';
import Details from './Details';
import Home from './Home';
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react';

function App() {

  const [jsonData, setJsonData] = useState([])

  useEffect ( () => {
      fetch("http://localhost:3005/destinations")
      .then ( (res) => res.json())
      .then ( data => setJsonData(data))
  }
  , [])

  return (
    <Switch>
      <Route exact path="/">
      <Home jsonData={jsonData} />
      </Route>
      <Route exact path={`/:id`}>
        <Details jsonData={jsonData}/>
      </Route>
    </Switch>
  );
}

export default App;
