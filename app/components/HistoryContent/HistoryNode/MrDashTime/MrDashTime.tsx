import React from 'react'
import HistoryNode from '../HistoryNode'

const MrDashTime = ({nospacer=false}:{nospacer?:boolean}) => {
  return (
    <HistoryNode noSpacer={nospacer} header='August 3, 2020' >
      <div className='flex  mb-3 items-center'>
            <hr className='flex-auto m-5' />
            <h3 className='text-center text-2xl'>Mr. Dash Released in Itch.io</h3>
            <hr className='flex-auto m-5' />
      </div>
      <div className='text-justify'>After a few months of on-and-off development Mr. Dash was released publicly via Itch.io, was generally unknown but it was a milestone of having developed a game enough for public viewing. It contained 5 levels out of the planned 10, the other 5 levels was never made.</div>
    </HistoryNode>
  )
}

export default MrDashTime