import React, { useState } from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import ProjectCarousel from './ProjectCarousel/ProjectCarousel'
import projects from './projects.json'

const ProjectPopUp = (props:any) => {
    const [carouselIndex,carouselIndexSet] = useState(0);

    function testIndex(){
        carouselIndexSet(1);
        console.log("clicked")
    }

    return (
        <div onClick={testIndex}>
            {props.isShown && (
                <div className='w-[90vw] h-[80vh] rounded-xl bg-neutral-900 border flex flex-col'>
                    <h1 className='text-center m-3 text-xl font-mono font-bold flex-none'>My Projects</h1>
                    <hr className='mx-10' />
                    <div className='flex-auto m-10 mt-5 mx-10 overflow-clip opacity-gradient'>
                        <div className='w-fit h-full relative center left-1/2 -translate-x-1/2'>
                            <ProjectCarousel carouselIndexMove={carouselIndex} callback={carouselIndexSet}>
                                {projects.map((project) => (
                                    <ProjectCard key={project.projectTitle} description={project.description} src={project.image} projectTitle={project.projectTitle}/>
                                ))}
                            </ ProjectCarousel>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectPopUp