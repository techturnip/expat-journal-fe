import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import SignIn from "./views/auth/SignIn";
import SignUp from "./views/auth/SignUp";
import Home from "./views/Home";
import MainNav from "./components/MainNav";

function App() {
  return (
    <div className="App">
      <Router primary={false}>
        <MainNav path="/*" />
      </Router>
      <Router>
        <SignIn path="signin" />
        <SignUp path="signup" />
        <Home path="/" />
      </Router>
    </div>
  );
}

export default App;
