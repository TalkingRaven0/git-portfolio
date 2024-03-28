import Image from "next/image";
import CoolGraphics from "./components/CoolGraphics/CoolGraphics";
import SectionButton from "./components/SectionButton/SectionButton";

const intro = "Hello! I am Den Arwin Salazar, I have a passion for coding and video games. Which incidentally means that I find development of video games fun. I pride myself in being able to learn and adapt quickly to new information and technologies as long as I have a clear development goal. I aim to enhance my soft skills in terms of cooperation and collaborative coding through working in a professional environment. I am currently on the look out for ways to progress my professional career further and hoping that I could enter the gaming industry as a programmer."

export default function Home() {
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
        <div className="h-fit flex-none flex px-[15%]">
          <SectionButton sectionName="What I know"/>
          <SectionButton sectionName="My Projects"/>
          <SectionButton sectionName="My History"/>
        </div>
      </div>
    </main>
  );
}
