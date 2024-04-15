'use client'
import React, { useRef, useState } from "react";
import SkillProjectsContent from "./components/SkillProjectsContent/SkillProjectsContent";
import HistoryContent from "./components/HistoryContent/HistoryContent";
import ContactsContent from "./components/ContactsContent/ContactsContent";
import NavigationButton from "./components/NavigationButton/NavigationButton";
import './customStyles/cube.css';

const intro = "I have a passion for coding and video games. Which incidentally means that I find development of video games fun. I pride myself in being able to learn and adapt quickly to new information and technologies as long as I have a clear development goal. I aim to enhance my soft skills in terms of cooperation and collaborative coding through working in a professional environment. I am currently on the look out for ways to progress my professional career further and hoping that I could enter the gaming industry as a programmer."

export default function Home() {

  const [showContent, setShowContent] = useState(false);
  const skillRef = useRef<null | HTMLDivElement>(null);
  const historyRef = useRef<null | HTMLDivElement>(null);

  var contentShow;
  var buttonShow;

  var CubeContainerStyleOverwrite = {};
  var CubeStyleOverwrite = {};

  if (showContent){
    contentShow = "";
    buttonShow = "hidden";
    CubeContainerStyleOverwrite={
      'perspective':"100dvh",
      'transitionProperty': "perspective",
      'transitionDuration': '1s',
    };
    CubeStyleOverwrite={
      height:"10vh",
      width:"10vh",
      'transitionProperty': "height, width",
      'transitionDuration': '1s'
    }
  } else {
    contentShow = "hidden";
    buttonShow = "";
  }
  
  function skillScroll(){
    if(skillRef.current!=null){
      skillRef.current.scrollIntoView({behavior:"smooth"});
    }
  }

  function historyScroll(){
    if(historyRef.current!=null){
      historyRef.current.scrollIntoView({behavior:"smooth"});
    }
  }

  return (
    <main className="  overflow-y-scroll hide-scroll h-screen w-screen snap-y snap-mandatory m-0 font-mono" >
      <div className='h-dvh snap-center bg-gradient-to-br from-slate-900 via-neutral-950 to-slate-800 relative overflow-clip'>
        <div className=" absolute-centered cubeDiv" style={CubeContainerStyleOverwrite}>
          <div className="cube cubeMain" style={CubeStyleOverwrite}>
            <div className="face top cubeMain" style={CubeStyleOverwrite}></div>
            <div className="face bottom cubeMain" style={CubeStyleOverwrite}></div>
            <div className="face left cubeMain" style={CubeStyleOverwrite}></div>
            <div className="face right cubeMain"  style={CubeStyleOverwrite}></div>
            <div className="face front cubeMain"  style={CubeStyleOverwrite}></div>
            <div className="face back cubeMain" style={CubeStyleOverwrite}></div>
          </div>
        </div>

        <div className={buttonShow}>
          <button className="absolute-centered p-10 bg-blue-950 border-2 border-sky-400 hover:bg-blue-900 rounded-lg text-5xl font-mono font-bold" onClick={()=>setShowContent(true)}>S T A R T</button>
        </div>
        <div className={contentShow + " flex flex-col h-full text-cyan-300 relative"}>
          <div className=" flex flex-col flex-auto p-5 font-mono z-10 m-10" >
            <div className="text-2xl flex-auto m-2 mb-6">Hello you can call me <span className="text-5xl m-2 font-bold drop-shadow-glow">Den</span></div>
            <div className=" flex-none w-full text-center">
              <div className="text-5xl">{"< P R O G R A M M E R  /  C O D E R >"}</div>
              <div className="text-2xl w-fit m-auto text-blue-200">Software Engineer</div>
              <div className="text-2xl w-fit m-auto text-blue-200">Game Developer</div>
            </div>
          </div>
          <div className=" flex-auto basis-full flex-grow h-fit flex">
            <NavigationButton clickFunc={skillScroll} textDisplay="Skills and Projects" />
            <NavigationButton clickFunc={historyScroll} textDisplay="History" />
          </div>
          <div className="flex-none h-fit bg-sky-950 bg-opacity-60 m-auto text-justify content-center px-10 py-3 text-lg font-mono box-shadow z-10 center">
            <div className="text-center text-3xl flex">
              <hr className="flex-auto m-auto border-blue-400"/>
              <div className="mx-10">About Me</div>
              <hr className="flex-auto m-auto border-blue-400"/>
            </div>
            <div className=" md:text-base lg:text-lg text-sm ">{intro}</div>
          </div>
          
        </div>
      </div>

      <div className={contentShow}>
        <SkillProjectsContent ref={skillRef}/>
        <div className=" h-dvh snap-center flex flex-col"  ref={historyRef}>
          <HistoryContent />
          <ContactsContent />
        </div>
      </div>
    </main>
  );
}
