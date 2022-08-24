import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";



import Home from "./home";
import About from "./about";
import Posts from "./posts";
import Profile from "./profile";
import NotFound from "./NotFound";
import React from "react";


function App() {
  return (
   <>
    
      <Router>
         
        <Routes>
           <Route path="/" exact element={<Home />} />
           <Route path="/about"  element={<About />} />
           <Route path="/posts"  element={<Posts />} />
           <Route path="/profile" element={<Profile />} />
           <Route path="*" element={<NotFound/>} />
         </Routes>

         <ul>
            <li><Link to="/home">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/posts">posts</Link></li>
            <li><Link to="/profile">profile</Link></li>
         </ul>
         
          
      </Router>
    </>
   
  );
}

export default App;
   