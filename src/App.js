import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import MainNav from "./components/MainNav";

function App() {
  return (
    <div className="App">
      <MainNav />
      <Router>
        <SignIn path="signin" />
        <SignUp path="signup" />
        <Home path="/" />
      </Router>
    </div>
  );
}

export default App;
