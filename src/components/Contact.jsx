import React from "react";
import Navbar from "./Navbar";
import Fotter from "./Fotter";
import "./dpe.css"
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineSettingsPhone } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";

const Contact=()=>{

    return(
        <div>
            <Navbar/>
            <div id="dpe">
            <h1>Space Inc.</h1>
          

            </div>
            <div id="pe"><img src="https://www.nasa.gov/wp-content/uploads/2023/03/astro-selfie.jpeg?w=2002" alt="" /></div>
            <div id="ze">
                <p> 
                <TfiEmail />
                    SpaceInc@Xyz.com
                </p>
                <p> 
                <MdOutlineSettingsPhone />
                    7887999709
                </p>
                <p> 
                <BsTwitterX />
                    Twiterincs
                </p>
                <p> 
                <IoLogoInstagram />
                    Instspactic
                </p>
            </div>
            <Fotter/>
            

        </div>
    );

}

export default Contact;