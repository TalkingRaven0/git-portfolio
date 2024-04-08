import React, { useState } from 'react'
import ProjectCard from './ProjectCard/ProjectCard'

const ProjectPopUp = (props:any) => {

    return (
        <div>
            {props.isShown && (
                <div className='w-[90vw] h-[80vh] rounded-xl bg-neutral-900 border flex flex-col'>
                    <h1 className='text-center m-3 text-xl font-mono font-bold flex-none'>My Projects</h1>
                    <hr className='mx-10' />
                    <div className='flex-auto m-10 mt-5 mx-10 overflow-auto scroll opacity-gradient'>
                        <div className=' flex flex-row w-fit h-full'>
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectPopUp