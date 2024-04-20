import React from 'react'
import HistoryNode from '../HistoryNode'

const Present = ({nospacer=false}:{nospacer?:boolean}) => {
  return (
    <HistoryNode noSpacer={nospacer} header='P R E S E N T' >
      <div className=' w-full text-center text-2xl bg-blue-900 p-2 mb-3'>Since August 2023</div>
      <h3 className='text-center mb-3 text-2xl'>Junior Graduate Developer</h3>
      <div className='flex  mb-3 items-center'>
          <hr className='flex-auto m-5' />
          <h3 className='text-center text-2xl'>A T</h3>
          <hr className='flex-auto m-5' />
      </div>
      <h3 className='text-center mb-3 text-2xl'>Seedbox Technologies Inc.</h3>
    </HistoryNode>
  )
}

export default Present