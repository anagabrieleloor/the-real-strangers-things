import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPosts from "./components/AllPosts";
import Register from "./components/Register"
import SinglePost from "./components/SinglePost";
import Navbar from "./components/Nav";
import Login from "./components/Login";
import React, { useState } from "react";
// import Login from "./components/Login";


function App() {
  


  return (
   <div className="App">
    {/* <h1>Stranger's Things</h1> */}
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/posts" element={<AllPosts />} />
      </Routes>
    </div>
  )
}

function Home() {
  const [token, setToken] = useState(null);
  return (
    <div>
      login and signup maybe
      <Register />
      <Login token={token} setToken={setToken} />
      
    </div>
  )
}

export default App
