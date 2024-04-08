import React from 'react'
import Image from 'next/image'

const ProjectCard = () => {
  return (
    <div className="w-80 h-auto m-1 bg-neutral-800 flex flex-col rounded-3xl border-2 border-neutral-400">
      {/* Header */}
      <div className=' flex-none'>
        <h1 className=' text-center text-2xl font-mono m-0 mt-3 p-0'>Mr. Dash</h1>
        <hr className=' m-2 mt-0' />
      </div>
      {/* Content */}
      <div className=' overflow-auto flex flex-col flex-1 hide-scroll'>
        <div className=' flex-none h-[50%]'>
          <div className='h-[100%] relative '>
              <Image 
                src="/resources/mDash.png"
                fill={true}
                alt="Mr. Dash Thumbnail"
                className=' object-scale-down'
                sizes='30vw'
              />
          </div>
        </div>
        <div>
          Lorem Ipsum <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />l
        </div>
      </div>
      
        
    </div>
  )
}

export default ProjectCard