import {Routes, Route, Link} from "react-router-dom";

export default function Navbar() {
return (



    <div id = "navbar">
        <h1>Stranger's Things</h1>

        
        <div id="navbar-links">
        <Link to ="/">Home</Link>
        <Link to ="/posts">Posts</Link>
        </div>
        
    </div>
)
}