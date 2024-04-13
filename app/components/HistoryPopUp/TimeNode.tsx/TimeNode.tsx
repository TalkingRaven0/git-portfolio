import React from 'react'


const TimeNode = ({nodeLabel="Time Node",popUpContent = "", date="", labelIsUp=true}:{nodeLabel:string,popUpContent:string, date: string,labelIsUp:boolean}) => {
    const upLabelClasses = "-top-3/4";
    const downLabelClasses = "bottom-0 mt-4";
    const baseLabelClasses = "absolute-centered whitespace-nowrap ";

    const upContentClasses = "translate-y-0 bottom-0 mt-5";
    const downContentClasses = "-translate-y-[100%] -top-3";
    const baseContentClasses = " absolute-centered bg-neutral-700 border w-[20vw] h-fit flex flex-col p-3 pt-1.5 z-30 center-shadow ";

    return (
    <div className=' flex-none relative group'>
        <div className=' size-7 rounded-full bg-white mx-auto group-hover:bg-slate-400' />
        <div className={baseLabelClasses + (labelIsUp ? upLabelClasses : downLabelClasses)}>{nodeLabel}</div>
        <div className=' hidden group-hover:block'>
            <div className={baseContentClasses + (labelIsUp ? upContentClasses : downContentClasses)}>
                <h1 className=' flex-none text-center'>{date}</h1>
                <hr />
                <div className='mt-3 text-justify text-sm'>{popUpContent}</div>
            </div>
        </div>
    </div>
    )
}

export default TimeNode