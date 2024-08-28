import axios from "axios";
import React, { useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosLogIn } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";
import { GiRocketThruster } from "react-icons/gi";
import "./Lay.css"
import Navbar from "./Navbar";
import Fotter from "./Fotter";


const Lay=()=>{

    const [userid,setuserid]=useState("")
    const [password,setpassword]=useState("")
    const navigate=useNavigate();

    const Handle=(e)=>{
        e.preventDefault();
        navigate('/home')



  

            axios.post("http://localhost:8080/data/add",{
                userid:userid,
                password:password,
            }
            )
        
        .then((res)=>{

            console.log(res);
            let ar=document.querySelector("div1");
            let con=document.createElement('label')
            con.textContent('created')
            ar.appendChild(con);

        })
        .catch((err)=>console.log(err))

        console.log(userid,password)

    }

    return(
        
            <div>
                <Navbar />
            <div id="div1">
                <div id="prop">
            <form onSubmit={Handle}>
            <h1>Space Program <GiRocketThruster className="icon" /> </h1>
                <div>
                <FaUserAstronaut className="icon" />
                <input type="text" placeholder="Login id" value={userid} onChange={(e)=>setuserid(e.target.value)}></input>
                </div>
                < br/>
                <div>
                <RiLockPasswordFill className="icon" />
                <input type="text" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}></input>
                </div>
                <br/>
                <button type="submit"><IoIosLogIn /> Login</button>

            </form>
            </div>
            </div>
            <Fotter />
            </div>


    );

}

export default Lay;