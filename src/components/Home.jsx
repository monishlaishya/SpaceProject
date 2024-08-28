import React from "react";
import Navbar from "./Navbar";
import Imager from "./Imager";
import "./Home.css"
import Fotter from "./Fotter";

const Home=()=>{
    return(
        <div>
          <Navbar />
          <div id="Hea"><h1>Our Space Rocket's</h1></div>
          <div id="pic">
          <Imager 
          img="https://images1.wionews.com/images/wion/900x1600/2023/7/3/1688378631742_FzsB5iagAEVzxn.jpg"
          alt="Chandryan"
          dat="Chandrayaan-3 is a follow-on mission to Chandrayaan-2 to demonstrate end-to-end capability in safe landing and roving on the lunar surface. It consists of Lander and Rover configuration. It will be launched by LVM3 from SDSC SHAR, Sriharikota. The propulsion module will carry the lander and rover configuration till 100 km lunar orbit. The propulsion module has Spectro-polarimetry of Habitable Planet Earth (SHAPE) payload to study the spectral and Polari metric measurements of Earth from the lunar orbit."
          dat2="Chandrayaan-3"

          />

          <Imager 
          img="https://www.datocms-assets.com/53444/1687431248-first-launch-of-a-saturn-v.jpg?auto=format&fit=max&w=1024"
          alt="Saturn V"
          dat="The Saturn V[f] is a retired American super heavy-lift launch vehicle developed by NASA under the Apollo program for human exploration of the Moon. The rocket was human-rated, had three stages, and was powered by liquid fuel. Flown from 1967 to 1973, it was used for nine crewed flights to the Moon, and to launch Skylab, the first American space station.As of 2024, the Saturn V remains the only launch vehicle to have carried humans beyond low Earth orbit (LEO)."
          dat2="Saturn V"

          />

        <Imager 
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Falcon_Heavy_Demo_Mission_%2839337245145%29.jpg/800px-Falcon_Heavy_Demo_Mission_%2839337245145%29.jpg"
          alt="Falcon Heavy"
          dat="Falcon Heavy is a heavy-lift launch vehicle with partial reusability that can carry cargo into Earth orbit, and beyond. It is designed, manufactured and launched by American aerospace company SpaceX.The rocket consists of a center core on which two Falcon 9 boosters are attached, and a second stage on top of the center core.[7] Falcon Heavy has the second highest payload capacity of any currently operational launch vehicle behind NASA's Space Launch System (SLS), and the fourth-highest capacity of any rocket to reach orbit, trailing behind the SLS, Energia and the Saturn V."
          dat2="Falcon Heavy"

          />
          <Imager 
          img="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2007/08/space_shuttle_endeavour/9508404-4-eng-GB/Space_Shuttle_Endeavour_pillars.jpg"
          alt="Endeavour"
          dat="Space Shuttle Endeavour (Orbiter Vehicle Designation: OV-105) is a retired orbiter from NASA's Space Shuttle program and the fifth and final operational Shuttle built. It embarked on its first mission, STS-49, in May 1992 and its 25th and final mission, STS-134, in May 2011.[1][2][3] STS-134 was expected to be the final mission of the Space Shuttle program,[4] but with the authorization of STS-135 by the United States Congress, Atlantis became the last shuttle to fly."
          dat2="Endeavour"

          />
          <Imager 
          img="https://upload.wikimedia.org/wikipedia/commons/1/16/STS122_Atlantis.jpg"
          alt="Atlantis"
          dat="Space Shuttle Atlantis (Orbiter Vehicle designation: OV‑104) is a retired Space Shuttle orbiter vehicle which belongs to NASA, the spaceflight and space exploration agency of the United States.[1] Atlantis was manufactured by the Rockwell International company in Southern California and was delivered to the Kennedy Space Center in Eastern Florida in April 1985. Atlantis is also the fourth operational and the second-to-last Space Shuttle built.[2][3] Its maiden flight was STS-51-J made from October 3 to 7, 1985."
          dat2="Atlantis"
          

          />
             <Imager 
          img="https://th-thumbnailer.cdn-si-edu.com/CB2K3cDGqc205sRpYhF2AkgSBf4=/fit-in/1200x0/filters:focal(594x217:595x218)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/6b/7c/6b7c71e4-91e5-4990-b99f-dfed10105548/first-shuttle-backlit.jpg"
          alt="Columbia"
          dat="Space Shuttle Columbia (OV-102) was a Space Shuttle orbiter manufactured by Rockwell International and operated by NASA. Named after the first American ship to circumnavigate the upper North American Pacific coast and the female personification of the United States, Columbia was the first of five Space Shuttle orbiters to fly in space, debuting the Space Shuttle launch vehicle on its maiden flight on April 12, 1981 and becoming the first ever spacecraft to be re-used after its first flight when it launched on STS-2 on November 12, 1981."
          dat2="Columbia"
          

          />
             <Imager 
          img="https://www.history.navy.mil/content/history/museums/nmusn/explore/photography/humanitarian/20th-century/1980-1989/1986-space-shuttle-challenger/_jcr_content/body/media_asset_248703872/image.img.jpg/1677782108795.jpg"
          alt="Challenger"
          dat="Space Shuttle Challenger (OV-099) was a Space Shuttle orbiter manufactured by Rockwell International and operated by NASA. Named after the commanding ship of a nineteenth-century scientific expedition that traveled the world, Challenger was the second Space Shuttle orbiter to fly into space after Columbia, and launched on its maiden flight in April 1983. It was destroyed in January 1986 soon after launch in a disaster that killed all seven crewmembers aboard."
          dat2="Challenger"
          

          />
          
        
          </div>
          
          <Fotter />
        </div>

    );
}

export default Home;