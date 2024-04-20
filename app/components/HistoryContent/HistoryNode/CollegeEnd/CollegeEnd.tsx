import React from 'react'
import HistoryNode from '../HistoryNode'

const CollegeEnd = ({nospacer=false}:{nospacer?:boolean}) => {
  return (
    <HistoryNode noSpacer={nospacer} header='August 2023' >
        <div className=' w-full text-center text-4xl bg-blue-900 p-2 mb-3'>GRADUATED COLLEGE</div>
        <div className='flex  mb-3 items-center'>
            <hr className='flex-auto m-5' />
            <h3 className='text-center text-lg'>Latin Honors Acquired: Cum Laude</h3>
            <hr className='flex-auto m-5' />
        </div>
        <h3 className='text-center mb-3 text-xl'>Bachelor of Engineering Technology</h3>
        <h3 className='text-center mb-3 text-lg'>Major in Computer Engineering Technology</h3>
        <hr />
        <div className='mb-3 text-2xl text-center mt-2'>Technological University of the Philippines</div>
    </HistoryNode>
  )
}

export default CollegeEnd