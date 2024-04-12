import React from 'react'
import TimeNode from './TimeNode.tsx/TimeNode'
import StartCollegeNode from './TimeNode.tsx/StartCollegeNode/StartCollegeNode'
import MrDashNode from './TimeNode.tsx/MrDashNode/MrDashNode'

const HistoryPopUp = (props:any) => {
  return (
    <div>
        {props.isShown && (
            <div className='w-[90vw] h-[80vh] rounded-xl bg-neutral-900 border flex flex-col'>
                <h1 className='text-center m-3 text-xl font-mono font-bold flex-none'>My Career Timeline</h1>
                <hr className='mx-10' />
                <div id='timeline' className=' m-10 flex-auto center relative'>
                    <div className='h-2 w-4/5 bg-white  absolute-centered rounded-full' />
                    <div className='h-fit w-4/5  absolute-centered rounded-xl flex flex-row'>
                        <StartCollegeNode />
                        <div className=' flex-auto' />
                        <MrDashNode />
                        <div className=' flex-auto' />
                        <TimeNode nodeLabel='Internship' nodePopUp={<></>} labelIsUp={true} />
                        <div className=' flex-auto' />
                        <TimeNode nodeLabel='Graduation' nodePopUp={<></>} labelIsUp={false} />
                        <div className=' flex-auto' />
                        <TimeNode nodeLabel='Current Employment' nodePopUp={<></>} labelIsUp={true} />
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default HistoryPopUp