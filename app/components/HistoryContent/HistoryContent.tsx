import React, { useEffect, useRef, useState } from 'react'
import '@/app/customStyles/historyStyle.css'
import Present from './HistoryNode/Present/Present';
import CollegeBegin from './HistoryNode/CollegeBegin/CollegeBegin';
import MrDashTime from './HistoryNode/MrDashTime/MrDashTime';
import CollegeEnd from './HistoryNode/CollegeEnd/CollegeEnd';

const HistoryContent = () => {
  const [zTranslate,setZtranslate] = useState(0);
  const [yTranslate,setYtranslate] = useState(0);
  const [xTranslate,setXtranslate] = useState(0);
  
  const [lineLength, setLineLength] = useState(0);
  const objectRef = useRef<null | HTMLDivElement>(null);
  const containerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!objectRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      // console.log(objectRef.current?.offsetWidth.toString());
      setLineLength(objectRef.current?.offsetWidth ? (objectRef.current?.offsetWidth*-0.40) : 0);
    });
    resizeObserver.observe(objectRef.current);
    return () => resizeObserver.disconnect(); // clean up 
  }, [])

  
  if(containerRef.current != null){
    const height = containerRef.current.clientHeight;
    const width = containerRef.current.clientWidth;
    containerRef.current.onmousemove=(event)=>{
      setZtranslate(lineLength*(event.clientY/(height+(lineLength*0.3))));
      setYtranslate(-1*((lineLength*0.4)-((lineLength*0.6)/height)*event.clientY));
      setXtranslate(-1*((lineLength*1)-((lineLength*1.2)/(width))*event.clientX));
    }
  }
  
  var objectStyle:any  = {
    '--tw-translate-z':zTranslate+"px",
    '--tw-translate-y':yTranslate+"px",
    '--tw-translate-x':xTranslate+"px"

  };
  

  return (
    <div ref={containerRef} className=' flex-auto  bg-slate-900 bg-gradient-radial from-slate-900 via-blue-950 to-slate-900 relative overflow-clip'>
      <div id='container' className=" absolute-centered size-full  opacity-gradient-tb">
          <div id='object' style={objectStyle} className="size-full min-w-full w-fit relative" >
            <div className='absolute-centered anchor h-full w-fit'>
              <div id='line'  ref={objectRef}  className="h-3 w-full bg-sky-400 absolute-centered" />
              <div  className=' anchor flex min-w-full w-fit h-full'>
                <CollegeBegin />
                <MrDashTime />
                <CollegeEnd />
                <Present nospacer />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HistoryContent