import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Navigate, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import CreateObject from "./components/CreateObject/CreateObject";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import GetId from "./components/Params/GetId";

function App() {
  return (
    <div className="App">
      <Navbar />
      <React.Fragment>
        <Routes>
          <Route exact path="/home"  element={<Home/>} />
          <Route exact path="/signup"  element={<Signup/>} />
          <Route exact path="/login"  element={<Login/>} />
          <Route exact path="/logout"  element={<Logout/>} />
          <Route exact path="/create"  element={<CreateObject/>} />
          <Route exact path="/item/:id"  element={<GetId/>} />

          <Route path='*' element={<Navigate to="/home" />}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
