'use client'
import CoolGraphics from "./components/CoolGraphics/CoolGraphics";
import SectionButton from "./components/SectionButton/SectionButton";
import InfoPopUp from "./components/InfoPopUp/InfoPopUp";
import { useState } from "react";
import ProjectPopUp from "./components/ProjectPopUp/ProjectPopUp";

const intro = "Hello! I am Den Arwin Salazar, I have a passion for coding and video games. Which incidentally means that I find development of video games fun. I pride myself in being able to learn and adapt quickly to new information and technologies as long as I have a clear development goal. I aim to enhance my soft skills in terms of cooperation and collaborative coding through working in a professional environment. I am currently on the look out for ways to progress my professional career further and hoping that I could enter the gaming industry as a programmer."

export default function Home() {
  // State Managers
  const [showInfo,setShowInfo] = useState(false)
  const [showProjects,setShowProjects] = useState(false)
  const [showHistory,setShowHistory] = useState(false)

  // Click Handlers
  const skillButtonHandler = () => {
    setShowInfo(showInfo => !showInfo)
    setShowProjects(showProjects => false)
    setShowHistory(showHistory => false)
  }
  
  const projectButtonHandler = () => {
    setShowProjects(showProjects => !showProjects)
    setShowHistory(showHistory => false)
    setShowInfo(showInfo => false)
  }
  
  const historyButtonHandler = () => {
    setShowHistory(showHistory => !showHistory)
    setShowInfo(showInfo => false)
    setShowProjects(showProjects => false)
  }


  return (
    <main className="bg-gradient-radial from-neutral-500 to-neutral-950">
      <div className=" h-screen flex flex-col">
        <div className="grid place-items-center h-auto flex-1">
          <div>
            <h1 className=" text-3xl font-mono w-full text-center">Welcome to my Portfolio</h1>
            <div className=" w-[100vw]  mt-10 bg-opacity-50 bg-neutral-900 py-20 h-fit">
              <p className=" w-[60%] h-fit align-middle text-justify m-auto leading-loose">{intro}</p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">   
          <InfoPopUp isShown={showInfo}/>
          <ProjectPopUp isShown={showProjects} />
          <InfoPopUp isShown={showHistory} />
        </div>
        <div className="h-fit flex-none flex px-[15%]">
          <SectionButton sectionName="What I know" clickFunction = {skillButtonHandler} />
          <SectionButton sectionName="My Projects" clickFunction = {projectButtonHandler} />
          <SectionButton sectionName="My History" clickFunction = {historyButtonHandler} />
        </div>
      </div>
    </main>
  );
}
