import React from "react";
import './Navbar.css'


const Navbar=()=>{

    return(
            <header id="Head">
              <a href="/Home">  <img src={require("./Space.png")} alt="Space" /></a> 
              <p>One Stop Collection's to Buy Space Trips</p>
            <nav className="naz">
                <a href="/Home">Home</a>
                <a href="/Contact">Contact</a>
                <a href="/About">About</a>
                <a href="/">Login</a>
                <a href="/Signup">Sign Up</a>
            </nav>
            </header>
        
    );

}

export default Navbar;