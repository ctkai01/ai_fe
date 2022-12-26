import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

function App() {
  const isLogin = localStorage.getItem("auth");
  console.log("Is log", isLogin)
  if (isLogin && window.location.pathname === '/login') {
    window.location.replace('/');
  }

  if (!isLogin && window.location.pathname === '/') {
    window.location.replace('/login');
  }
  return (
    <BrowserRouter>
      {isLogin ? (
        <Switch>
          <Route path="/" component={Home} exact={true}/>
          {/* <Route>Sorry, this page isn't available</Route> */}
        </Switch>
      ) : (
        <Switch>
          <Route path="/login" component={Login} exact={true}/>
          {/* <Route>Sorry, this page isn't available</Route> */}
        </Switch>
      )}
    </BrowserRouter>
  );
}

export default App;
