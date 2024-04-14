import React from 'react'

const NavigationButton = ({clickFunc,textDisplay}:{clickFunc:any,textDisplay:string}) => {
  return (
    <div className=" flex-auto relative">
        <button className=" absolute-centered p-10 bg-sky-950 rounded-lg text-5xl drop-shadow-glow font-mono tracking-widest font-bold hover:bg-sky-700" onClick={clickFunc}>{textDisplay}</button>
    </div>
  )
}

export default NavigationButton