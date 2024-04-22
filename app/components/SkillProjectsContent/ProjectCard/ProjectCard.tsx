import React from 'react'
import Image from 'next/image'

const ProjectCard = ({description,src,projectTitle, heightClass="h-[40%]"}:{description:React.JSX.Element,src:string,projectTitle:string,heightClass?:string}) => {
  return (
    <div className=" flex flex-col h-full">
      {/* Header */}
      <div className=' flex-none'>
        <h1 className=' text-center text-2xl font-mono m-0 mt-3 p-0'>{projectTitle}</h1>
        <hr className=' mx-6 my-3 border-sky-400' />
      </div>
      {/* Content */}
      <div className=' overflow-auto flex flex-col flex-1 hide-scroll'>
        <div className={' flex-none '+ heightClass}>
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