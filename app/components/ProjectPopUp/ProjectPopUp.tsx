import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import ProjectCarousel from './ProjectCarousel/ProjectCarousel'
import MrDash from './ProjectCard/MrDash/MrDash'

const ProjectPopUp = (props:any) => {
    return (
        <div>
            {props.isShown && (
                <div className='w-[90vw] h-[80vh] rounded-xl bg-neutral-900 border flex flex-col'>
                    <h1 className='text-center m-3 text-xl font-mono font-bold flex-none'>My Projects</h1>
                    <hr className='mx-10' />
                    <ProjectCarousel>
                        <MrDash />
                        <ProjectCard description={<div>PlaceHolder1</div>} src="/projectPictures/placeholder.png" projectTitle="Place Holder 1st"/>
                        <ProjectCard description={<div>PlaceHolder2</div>} src="/projectPictures/placeholder.png" projectTitle="Place Holder 2nd"/>
                    </ ProjectCarousel>
                </div>
            )}
        </div>
    )
}

export default ProjectPopUp