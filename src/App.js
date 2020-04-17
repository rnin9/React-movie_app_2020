import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Navigation from "./components/Navigation"
import Home from "./routes/Home"
function App(){
  return (
    <HashRouter>
    <Navigation/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/home/introduction">
      <h1>Introduction</h1>
    </Route>
    <Route path="/about" component ={About}>
     <h1>About</h1> 
    </Route>
    </HashRouter>
    );
}
export default App;
