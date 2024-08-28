import React from "react";
import Navbar from "./Navbar";
import Fotter from "./Fotter";
import "./Signup.css"


const Signup=()=>
{
    return(
        <div>
            <Navbar />
        <div id="sign">
        <form>
            <input type='text' placeholder="Enter your User"></input>
            <br/>
            <input type='text' placeholder="Enter your New Password"></input>
            <br/>
            <button action="submit"> Click to Signup</button>

        </form>
        </div>
        <Fotter />
        </div>

    );

    
}

export default Signup;