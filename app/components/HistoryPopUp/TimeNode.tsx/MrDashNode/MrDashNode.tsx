import React from 'react'
import TimeNode from '../TimeNode'

const MrDashNode = () => {
    const nodePopUp = (
        <div className=' absolute-centered -translate-y-[100%] -top-3 bg-neutral-700 border w-[20vw] h-fit flex flex-col p-3'>
            <h1 className=' flex-none text-center'>August 03, 2020</h1>
            <hr />
            <div className='mt-3 text-justify text-sm'>After a few months of on-and-off development Mr. Dash was released publicly via Itch.io, was generally unknown but it was a milestone of having developed a game enough for public viewing. It contained 5 levels out of the planned 10, the other 5 levels was never made.</div>
        </div>
    );
    
    return (
        <TimeNode nodeLabel='Mr. Dash Project' nodePopUp={nodePopUp} labelIsUp={false} />
    )
}

export default MrDashNode