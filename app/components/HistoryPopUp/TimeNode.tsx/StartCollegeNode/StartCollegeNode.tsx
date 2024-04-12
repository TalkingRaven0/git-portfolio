import React from 'react'
import TimeNode from '../TimeNode'

const StartCollegeNode = () => {
    const nodePopUp = (
        <div className=' absolute-centered translate-y-0 bottom-0 mt-5 bg-neutral-700 border w-[25vw] h-fit flex flex-col p-3 pt-1.5'>
            <h1 className=' flex-none text-center'>2019</h1>
            <hr />
            <div className='mt-3 text-justify text-sm'>Started College under the course of Computer Engineering Technology Major in Computer Engineering Technology</div>
        </div>
    );
    
    return (
        <TimeNode nodeLabel='Start of College' nodePopUp={nodePopUp} labelIsUp={true} />
    )
}

export default StartCollegeNode