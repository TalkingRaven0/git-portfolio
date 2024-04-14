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

  if (showContent){
    contentShow = "";
    buttonShow = "hidden";
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
    <main className="  overflow-y-scroll hide-scroll h-screen w-screen snap-y snap-mandatory m-0" >
      <div className='h-dvh snap-center bg-gradient-to-br from-slate-800 via-sky-900 to-slate-800'>
        <div className=" absolute-centered ">
          <div className="cube cubeMain">
            <div className="face top cubeMain"></div>
            <div className="face bottom cubeMain"></div>
            <div className="face left cubeMain"></div>
            <div className="face right cubeMain"></div>
            <div className="face front cubeMain"></div>
            <div className="face back cubeMain"></div>
          </div>
        </div>

        <div className={buttonShow}>
          <button className="absolute-centered p-10 bg-blue-950 rounded-lg text-5xl drop-shadow-glow font-mono tracking-widest font-bold" onClick={()=>setShowContent(true)}>START</button>
        </div>
        <div className={contentShow + " flex flex-row h-full text-cyan-300"}>
          <div className="flex-none w-2/5 bg-sky-950 bg-opacity-60 m-auto mx-10 text-justify content-center px-10 h-5/6 text-lg font-mono box-shadow leading-10 md:max-lg:leading-7 z-10">{intro}</div>
          <div className=" flex-auto flex flex-col">
            <div className="bg-sky-950 bg-opacity-60 h-2/5 m-10 p-3 flex flex-col font-mono z-10" >
              <div className=" text-3xl mt-3 ml-2 flex-auto">Hello</div>
              <div className=" text-4xl relative text-right flex-auto">My name is <span className=" text-4xl text-cyan-200 font-bold drop-shadow-glow">Den Arwin G. Salazar</span></div>
              <div className=" text-5xl mt-3 ml-2 flex-auto text-center">Welcome to My Porfolio</div>
            </div>
            <div className=" flex-auto flex">
              <NavigationButton clickFunc={skillScroll} textDisplay="Skills" />
              <NavigationButton clickFunc={historyScroll} textDisplay="History" />
            </div>
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
