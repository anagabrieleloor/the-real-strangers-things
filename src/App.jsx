import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPosts from "./components/AllPosts";
import Register from "./components/Register"
import SinglePost from "./components/SinglePost";
import Navbar from "./components/Nav";
import Login from "./components/Login";
import NewPostForm from "./components/NewPostForm";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function App() {
  


  return (
   <div className="App">
    {/* <h1>Stranger's Things</h1> */}
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path='/newpost' element={<NewPostForm />} />
      <Route path='/signup' element={<Register />} />
      </Routes>
    </div>
  )
}

function Home() {
  const [token, setToken] = useState(null);
  return (
    <div id="home">
      login and signup maybe
      {/* <Register /> */}
      <Login token={token} setToken={setToken} />
      <Link to ="/signup">new? sign up</Link>
      
    </div>
  )
}

export default App
