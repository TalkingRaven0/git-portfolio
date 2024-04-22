import React, { forwardRef, useState } from 'react'
import ProjectCarousel from './ProjectCarousel/ProjectCarousel';
import MrDash from './ProjectCard/MrDash/MrDash';
import ProjectCard from './ProjectCard/ProjectCard';

import techSkillText from './techSkills.json';
import softSkillText from './softSkills.json';
import ProjectMars from './ProjectCard/ProjectMars/ProjectMars';


const SkillProjectsContent = forwardRef(function SkillProjectsContent(props, ref:any) {

  return (
    <div className=' h-dvh snap-center bg-slate-950 flex flex-col' ref={ref}>
      <div className=" flex-none text-center text-3xl flex mx-10 mt-3" >
        <hr className="flex-auto m-auto border-blue-400"/>
        <div className="mx-10 text-cyan-100">P R O J E C T S</div>
        <hr className="flex-auto m-auto border-blue-400"/>
      </div>
      <div className=' h-20 flex-auto p-10'>
        <ProjectCarousel>
            <MrDash />
            <ProjectMars />
            <ProjectCard description={<div>PlaceHolder2</div>} src="/projectPictures/placeholder.png" projectTitle="Place Holder 2nd"/>
        </ ProjectCarousel>
      </div>
      <div className=' flex flex-row flex-none h-1/5 bg-sky-900 text-sky-300'>
        <div className='flex-auto justify-normal text-center bg-sky-950'>
            <h1 className=' text-xl font-mono font-bold'> Technical Skills </h1>
            <div className='overflow-auto m-2'>
                {techSkillText.map((skill) => (
                    <div className=' inline-block bg-sky-900 font-bold py-2 px-4 rounded m-1' key={skill.skillName}>{skill.skillName}</div>
                ))}
            </div>
        </div>
        <div className='flex-auto justify-normal text-center bg-sky-950 bg-opacity-5'>
            <h1 className=' text-xl font-mono font-bold '> Soft Skills </h1>
            <div className=' overflow-auto'>
                {softSkillText.map((skill) => (
                    <div className=' inline-block bg-sky-800 font-bold py-2 px-4 rounded m-1' key={skill} >{skill}</div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
});

export default SkillProjectsContent