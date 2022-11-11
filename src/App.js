import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./Components/Registration";
import { Routes, Route } from 'react-router-dom'
import Login from "./Components/Login";
import Home from "./Components/Home";
function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element= {<Registration />}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/home" element= {<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
