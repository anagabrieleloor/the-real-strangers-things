import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPosts from "./components/AllPosts";

import SinglePost from "./components/SinglePost";
import Navbar from "./components/Nav";


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
  return (
    <div>
      login and signup maybe
    </div>
  )
}

export default App
