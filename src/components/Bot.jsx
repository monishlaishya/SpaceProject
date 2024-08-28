import React from "react";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { FaSpaceAwesome } from "react-icons/fa6";


const Bot=()=>
{
  


    const steps=
    [
      {
        id:'1',
        message:'welcome,you can go through our space project on home page, please enter yes go through our spacerockets',
        trigger:'2',
       
      },
      {
        id:'2',
        user:true,
        trigger:'3',
      },
      {
        id:'3',
        message:'Chandrayaan-3 is a follow-on mission to Chandrayaan-2 to demonstrate end-to-end capability in safe landing and roving on the lunar surface. It consists of Lander and Rover configuration. It will be launched by LVM3 from SDSC SHAR, Sriharikota. The propulsion module will carry the lander and rover configuration till 100 km lunar orbit. The propulsion module has Spectro-polarimetry of Habitable Planet Earth (SHAPE) payload to study the spectral and Polari metric measurements of Earth from the lunar orbit.',
        trigger:'4'
    
      },
      {
        id:'4',
        message:'If you Want to go about Saturn V,Type Yes',
        trigger:'5'
    
      },
      {
        id:'5',
        user:true,
        trigger:'6',
      },
      {
        id:'6',
        message:'The Saturn V[f] is a retired American super heavy-lift launch vehicle developed by NASA under the Apollo program for human exploration of the Moon. The rocket was human-rated, had three stages, and was powered by liquid fuel. Flown from 1967 to 1973, it was used for nine crewed flights to the Moon, and to launch Skylab, the first American space station.As of 2024, the Saturn V remains the only launch vehicle to have carried humans beyond low Earth orbit (LEO).',
        trigger:'7'
    
      },
      {
        id:'7',
        message:'If you Want to go about Falcon Heavy,Type Yes',
        trigger:'8'
    
      },
      {
        id:'8',
        user:true,
        trigger:'9',
      },
      {
        id:'9',
        message:'Falcon Heavy is a heavy-lift launch vehicle with partial reusability that can carry cargo into Earth orbit, and beyond. It is designed, manufactured and launched by American aerospace company SpaceX.The rocket consists of a center core on which two Falcon 9 boosters are attached, and a second stage on top of the center core.[7] Falcon Heavy has the second highest payload capacity of any currently operational launch vehicle behind NASAs Space Launch System (SLS), and the fourth-highest capacity of any rocket to reach orbit, trailing behind the SLS, Energia and the Saturn V.',
        trigger:'10'
    
      },
      {
        id:'10',
        message:'If you Want to go about Endeavour,Type Yes',
        trigger:'11'
    
      },
      {
        id:'11',
        user:true,
        trigger:'12',
      },
      {
        id:'12',
        message:'Space Shuttle Endeavour (Orbiter Vehicle Designation: OV-105) is a retired orbiter from NASAs Space Shuttle program and the fifth and final operational Shuttle built. It embarked on its first mission, STS-49, in May 1992 and its 25th and final mission, STS-134, in May 2011.[1][2][3] STS-134 was expected to be the final mission of the Space Shuttle program,[4] but with the authorization of STS-135 by the United States Congress, Atlantis became the last shuttle to fly.',
        trigger:'13'
    
      },
      {
        id:'13',
        message:'If you Want to go about Atlantis,Type Yes',
        trigger:'14'
    
      },
      {
        id:'14',
        user:true,
        trigger:'15',
      },
      {
        id:'15',
        message:'Space Shuttle Atlantis (Orbiter Vehicle designation: OV‑104) is a retired Space Shuttle orbiter vehicle which belongs to NASA, the spaceflight and space exploration agency of the United States.[1] Atlantis was manufactured by the Rockwell International company in Southern California and was delivered to the Kennedy Space Center in Eastern Florida in April 1985. Atlantis is also the fourth operational and the second-to-last Space Shuttle built.[2][3] Its maiden flight was STS-51-J made from October 3 to 7, 1985.',
        trigger:'16'
    
      },
      {
        id:'13',
        message:'If you Want to go about Atlantis,Type Yes',
        trigger:'14'
    
      },
      {
        id:'14',
        user:true,
        trigger:'15',
      },
      {
        id:'15',
        message:'Space Shuttle Atlantis (Orbiter Vehicle designation: OV‑104) is a retired Space Shuttle orbiter vehicle which belongs to NASA, the spaceflight and space exploration agency of the United States.[1] Atlantis was manufactured by the Rockwell International company in Southern California and was delivered to the Kennedy Space Center in Eastern Florida in April 1985. Atlantis is also the fourth operational and the second-to-last Space Shuttle built.[2][3] Its maiden flight was STS-51-J made from October 3 to 7, 1985.',
        trigger:'16'
    
      },
      {
        id:'16',
        message:'If you Want to go about Columbia,Type Yes',
        trigger:'17'
    
      },
      {
        id:'17',
        user:true,
        trigger:'18',
      },
      {
        id:'18',
        message:'Space Shuttle Columbia (OV-102) was a Space Shuttle orbiter manufactured by Rockwell International and operated by NASA. Named after the first American ship to circumnavigate the upper North American Pacific coast and the female personification of the United States, Columbia was the first of five Space Shuttle orbiters to fly in space, debuting the Space Shuttle launch vehicle on its maiden flight on April 12, 1981 and becoming the first ever spacecraft to be re-used after its first flight when it launched on STS-2 on November 12, 1981.',
        trigger:'19'
    
      },
      {
        id:'19',
        message:'If you Want to go about Challenger,Type Yes',
        trigger:'20'
    
      },
      {
        id:'20',
        user:true,
        trigger:'21',
      },
      {
        id:'21',
        message:'Space Shuttle Challenger (OV-099) was a Space Shuttle orbiter manufactured by Rockwell International and operated by NASA. Named after the commanding ship of a nineteenth-century scientific expedition that traveled the world, Challenger was the second Space Shuttle orbiter to fly into space after Columbia, and launched on its maiden flight in April 1983. It was destroyed in January 1986 soon after launch in a disaster that killed all seven crewmembers aboard.',
        end:true
    
      },
      
  
    ]


    return(
        <div>
            <ThemeProvider theme={{background: '#f5f8fb',headerBgColor: '#4682B4',}}>
            <ChatBot steps={steps}  floating={true} hideBotAvatar={true} hideUserAvatar={true} floatingIcon={<FaSpaceAwesome />} />
            </ThemeProvider>
        </div>

    )


}

export default Bot;