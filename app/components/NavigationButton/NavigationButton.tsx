import React from 'react'

const NavigationButton = ({clickFunc,textDisplay}:{clickFunc:any,textDisplay:string}) => {
  return (
    <div className=" flex-auto relative">
        <button className=" absolute-centered bg-sky-950 rounded-lg w-2/3 h-1/3 drop-shadow-glow font-mono tracking-widest font-bold hover:bg-sky-700 text-2xl" onClick={clickFunc}>{textDisplay}</button>
    </div>
  )
}

export default NavigationButton