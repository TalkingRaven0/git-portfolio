import React from 'react'
import Image from 'next/image'

const ProjectCard = ({description,src,projectTitle}:{description:React.JSX.Element,src:string,projectTitle:string}) => {
  return (
    <div className="w-[50vw] h-auto m-1 bg-neutral-800 flex flex-col rounded-3xl border-2 border-neutral-400">
      {/* Header */}
      <div className=' flex-none'>
        <h1 className=' text-center text-2xl font-mono m-0 mt-3 p-0'>{projectTitle}</h1>
        <hr className=' m-2 mt-0' />
      </div>
      {/* Content */}
      <div className=' overflow-auto flex flex-col flex-1 hide-scroll'>
        <div className=' flex-none h-[40%]'>
          <div className='h-[100%] relative '>
              <Image 
                src={src}
                fill={true}
                alt={projectTitle + " Thumbnail"}
                className=' object-scale-down'
                sizes='40vw'
              />
          </div>
        </div>
        <div className=' h-fit'>
          {description}
        </div>
      </div>
      
        
    </div>
  )
}

export default ProjectCard