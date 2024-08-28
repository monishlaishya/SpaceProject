import React from "react";
import Navbar from "./Navbar";
import Fotter from "./Fotter";
import Imager from "./Imager";
import "./About.css"

const About=()=>{

    return(
        <div>
            <Navbar />
            <div className="alie"><h1>Space Inc.</h1></div>
            <div className="po">
                <Imager
                img="https://i.etsystatic.com/5150206/r/il/e5d58d/2907694029/il_570xN.2907694029_4qnl.jpg"
                alt="Spacepic"
                />
                <div>
                <p>Space Inc. is a cutting-edge aerospace company dedicated to advancing humanity's presence in space. Founded on the principles of innovation, sustainability, and exploration, Space Inc. has quickly become a leader in the rapidly evolving space industry.At the heart of Space Inc. is a commitment to innovation. The company invests heavily in research and development, exploring new propulsion systems, life support technologies, and sustainable energy solutions. Space Inc. collaborates with leading universities, research institutions, and other private space companies to push the boundaries of what's possible.Space Inc. is dedicated to ensuring that space exploration is conducted in a manner that is sustainable and ethical. The company follows strict guidelines to minimize space debris, reduce the environmental impact of launches, and promote responsible exploration. Space Inc. also advocates for international cooperation and the peaceful use of space.
                At the heart of Space Inc. is a commitment to innovation. The company invests heavily in research and development, exploring new propulsion systems, life support technologies, and sustainable energy solutions. Space Inc. collaborates with leading universities, research institutions, and other private space companies to push the boundaries of what's possible.
                </p>
                <p>Space Inc. offers state-of-the-art satellite deployment services, utilizing proprietary launch vehicles that are designed for efficiency and reliability. Additionally, the company provides in-orbit maintenance and repair services, ensuring the longevity and functionality of satellites.
                With the rise of interest in space tourism, Space Inc. has developed a luxurious space travel experience. Offering orbital flights and stays in space hotels, Space Inc. aims to make the dream of traveling beyond Earth accessible to civilians.
                </p>
                </div>

            </div>


            <Fotter />
           

        </div>
    );

}

export default About;