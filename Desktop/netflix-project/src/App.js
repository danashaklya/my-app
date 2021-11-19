
import './App.css';

import Home from "./home/Home";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


const App = () => {

  return (
    <Router>
      <Switch>
      <Route  path="/">
        <Home />
      </Route>
      <Route path="/TV Shows">
        <Home type="Tv Shows"/>
      </Route>
      </Switch>
    </Router>
  );
   
  
};

export default App;
