import React from 'react'


const TimeNode = ({nodeLabel="Time Node",nodePopUp = <></>, labelIsUp=true}:{nodeLabel:string,nodePopUp:React.JSX.Element,labelIsUp:boolean}) => {
    const upClasses = "-top-3/4";
    const downClasses = "bottom-0 mt-4";
    const baseClasses = "absolute-centered whitespace-nowrap ";

    return (
    <div className=' flex-none relative group'>
        <div className=' size-7 rounded-full bg-white mx-auto group-hover:bg-slate-400' />
        <div className={baseClasses + (labelIsUp ? upClasses : downClasses)}>{nodeLabel}</div>
        <div className=' hidden group-hover:block'>{nodePopUp}</div>
    </div>
    )
}

export default TimeNode