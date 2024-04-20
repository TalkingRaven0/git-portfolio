import React from 'react'
import HistoryNode from '../HistoryNode'

const CollegeBegin = ({nospacer=false}:{nospacer?:boolean}) => {
  return (
    <HistoryNode noSpacer={nospacer} header='2 0 1 9' >
        <div className=' w-full text-center text-4xl bg-blue-900 p-2 mb-3'>STARTED COLLEGE</div>
        <h3 className='text-center mb-3 text-xl'>Bachelor of Engineering Technology</h3>
        <div className='flex  mb-3 items-center'>
            <hr className='flex-auto m-5' />
            <h3 className='text-center text-lg'>Major in</h3>
            <hr className='flex-auto m-5' />
        </div>
        <h3 className='text-center mb-3 text-2xl'>Computer Engineering Technology</h3>
        <hr />
        <div className='mb-3 text-2xl text-center mt-2'>Technological University of the Philippines</div>
    </HistoryNode>
  )
}

export default CollegeBegin