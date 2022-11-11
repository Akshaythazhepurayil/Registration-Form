import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./Components/Registration";
import { Routes, Route } from 'react-router-dom'
import Login from "./Components/Login";
function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element= {<Registration />}/>
        <Route path="/login" element= {<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
