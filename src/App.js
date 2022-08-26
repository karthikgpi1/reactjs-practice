import { BrowserRouter as Router, Route, Routes, Link, NavLink, Navigate} from "react-router-dom";

import { useState } from "react";

// import { commonActions } from "react-navigation/native";

import Home from "./Home";
import About from "./About";
import Posts from "./posts";
import Profile from "./profile";
import NotFound from "./NotFound";
import Protected from "./Protected";

// import React from "react";


function App() {

  const [empty] = useState(false);

  
  return (
   <>
    
      <Router>

      <ul>
            <li><NavLink  to="/">home</NavLink></li>
            <li><NavLink  to="/about">about</NavLink></li>
            <li><NavLink  to="/posts">posts</NavLink></li>
            <li><NavLink  to="/profile">profile</NavLink></li>
            <li><NavLink  to="/Protected">protected</NavLink></li>

      </ul>
      
            
         
        <Routes>
           <Route path="/" exact element={<Home />} />
           <Route path="/about"  element={<About />} />
           <Route path="/posts"  element={<Posts />} />
           <Route path="/Protected" element={<Protected/>} />
           <Route path="/profile" element={<Profile />} />
           <Route path="*" element={<NotFound/>} />
         </Routes>
      </Router>
    </>
   
  );
}

export default App;
   