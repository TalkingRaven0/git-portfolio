import React from 'react';
import TimeNode from './TimeNode.tsx/TimeNode';
import timeNodes from './timeNodes.json';

const HistoryPopUp = (props:any) => {

    function createTimeNode(node:typeof timeNodes[0],index:number,length:number){
        var spacer:React.JSX.Element;
        var labelUp:boolean;
        
        if(index%2==0){
            labelUp = true;
        } else {
            labelUp = false;
        }

        if(index == length-1){
            spacer = <></>;
        } else {
            spacer = <div className=' flex-auto' />;
        }

        return (
            <>
                <TimeNode nodeLabel={node.nodeName} popUpContent={node.popUpContent} date={node.date} labelIsUp={labelUp} />
                {spacer}
            </>
        )
    }

    return (
        <div>
            {props.isShown && (
                <div className='w-[90vw] h-[80vh] rounded-xl bg-neutral-900 border flex flex-col'>
                    <h1 className='text-center m-3 text-xl font-mono font-bold flex-none'>My Career Timeline</h1>
                    <hr className='mx-10' />
                    <div id='timeline' className=' m-10 flex-auto center relative'>
                        <div className='h-2 w-4/5 bg-white  absolute-centered rounded-full' />
                        <div className='h-fit w-4/5  absolute-centered rounded-xl flex flex-row'>
                            {timeNodes.map((node,index) => createTimeNode(node,index,timeNodes.length) )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HistoryPopUp