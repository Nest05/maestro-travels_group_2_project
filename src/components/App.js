
import About from "./About";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import {  DiAptana } from "react-icons/di";
import { FiMenu } from "react-icons/fi";

const y = 10; 


function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
