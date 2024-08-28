import React from "react";
import "./Imager.css";

const Imager=({img,alt,dat,dat2})=>{

    return(
        <div id="align">
        <h2>{dat2}</h2>
           <img src={img} alt={alt} />
           <p>{dat}</p>
        </div>   

        
    );

}

export default Imager;