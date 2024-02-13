import About from "./About";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";

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
