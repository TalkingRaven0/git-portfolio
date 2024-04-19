import React, { useEffect, useRef, useState } from 'react'
import '@/app/customStyles/historyStyle.css'
import HistoryNode from './HistoryNode/HistoryNode';

const HistoryContent = () => {
  const [zTranslate,setZtranslate] = useState(0);
  const objectRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!objectRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      // console.log(objectRef.current?.offsetWidth.toString());
      setZtranslate(objectRef.current?.offsetWidth ? (objectRef.current?.offsetWidth*-0.40) : 0);
    });
    resizeObserver.observe(objectRef.current);
    return () => resizeObserver.disconnect(); // clean up 
  }, [])

  
  var objectStyle:any  = {'--tw-translate-z':zTranslate+"px"};
  

  return (
    <div className=' flex-auto  bg-slate-900 relative overflow-clip'>
      <div id='container' className=" absolute-centered size-full">
          <div id='object' style={objectStyle} className="size-full min-w-full w-fit relative" >
            <div className='absolute-centered anchor h-full w-fit'>
              <div id='line'  ref={objectRef}  className="h-3 w-full bg-sky-400 absolute-centered" />
              <div  className=' anchor flex min-w-full w-fit h-full'>
                <HistoryNode />
                <HistoryNode />
                <HistoryNode />
                <HistoryNode noSpacer />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HistoryContent