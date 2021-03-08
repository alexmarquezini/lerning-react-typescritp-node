import React from "react";
import { Route, Switch } from "react-router";
import AnotherScreen from "./AnotherScreen";
import "./App.css";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Switch>
         <Route exact={true} path="/" component={Home}></Route>
         <Route path="/another" component={AnotherScreen}></Route>
       </Switch>
      </header>
    </div>
  );
}

export default App;
