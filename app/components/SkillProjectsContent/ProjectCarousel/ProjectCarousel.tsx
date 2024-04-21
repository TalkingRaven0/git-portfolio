import Image from 'next/image';
import React, {useMemo, useRef, useState } from 'react'
import CarouselCard from './CarouselCard/CarouselCard';
import '@/app/customStyles/projectStyle.css'

const ProjectCarousel = ({children}: {children:Array<React.JSX.Element>}) => {
    const [currentIndex,currentIndexSet] = useState(0);

    const centerDisplay = children[currentIndex];
    let movement = 0;

    const refLeftHidden = useRef<null|HTMLDivElement>(null)
    const refLeftDisplay = useRef<null|HTMLDivElement>(null)
    const refCenterDisplay = useRef<null|HTMLDivElement>(null)
    const refRightDisplay = useRef<null|HTMLDivElement>(null)
    const refRightHidden = useRef<null|HTMLDivElement>(null)

    const leftDisplay = (currentIndex==0) ?
    children[children.length-1] : 
    children[currentIndex-1];

    const leftHidden = (currentIndex-2 < 0) ?
    children[children.length-1] :
    children[currentIndex-2];

    const rightDisplay = (currentIndex >= children.length-1) ?
    children[0] :
    children[currentIndex+1];

    const rightHidden = (currentIndex+1 >= children.length-1) ?
    (currentIndex+1 == children.length-1) ? children[0]:children[1] :
    children[currentIndex+2];

    function nextProject(){ // function will only start the animations
        if(refLeftDisplay.current == null) return;
        if(refCenterDisplay.current == null) return;
        if(refRightDisplay.current == null) return;
        if(refRightHidden.current == null) return;

        refRightDisplay.current.classList.add("rNext");
        refCenterDisplay.current.classList.add("cNext");
        refRightHidden.current.classList.add("rhNext");
        refLeftDisplay.current.classList.add("lNext");
        movement = 1;
    }

    function previousProject(){ // function will only start the animations
        if(refLeftHidden.current == null) return;
        if(refLeftDisplay.current == null) return;
        if(refCenterDisplay.current == null) return;
        if(refRightDisplay.current == null) return;
        
        refRightDisplay.current.classList.add("rPrev");
        refCenterDisplay.current.classList.add("cPrev");
        refLeftHidden.current.classList.add("lhPrev");
        refLeftDisplay.current.classList.add("lPrev");
        movement = -1;

    }
    useMemo(()=>{
        if(refRightDisplay.current==null)return;
        if(refCenterDisplay.current==null)return;
        if(refRightHidden.current==null)return;
        if(refLeftDisplay.current==null)return;
        if(refLeftHidden.current==null)return;

        refLeftDisplay.current.classList.remove("lPrev");
        refRightDisplay.current.classList.remove("rPrev");
        refCenterDisplay.current.classList.remove("cPrev");
        refLeftHidden.current.classList.remove("lhPrev");

        refLeftDisplay.current.classList.remove("lNext");
        refRightDisplay.current.classList.remove("rNext");
        refCenterDisplay.current.classList.remove("cNext");
        refRightHidden.current.classList.remove("rhNext");
    },[currentIndex])

    if(refRightDisplay.current!=null) refRightDisplay.current.onanimationend=() => {
        if(movement != 1) return;
        if(currentIndex >= children.length-1){
            currentIndexSet(0);
        } else {
            currentIndexSet(currentIndex+1);
        }
    }
    
    if(refLeftDisplay.current!=null) refLeftDisplay.current.onanimationend = () => {
        if(movement != -1) return;
        if(currentIndex == 0){
            currentIndexSet(children.length-1);
        } else {
            currentIndexSet(currentIndex-1);
        }
    }
    return (
        <div className='h-full relative'>
            <button className=' absolute z-50 right-0 h-full bg-black bg-opacity-15 hover:bg-slate-600 hover:bg-opacity-20' onClick={nextProject}>
                <Image className=' drop-shadow-glow' src="/resources/arrow.svg" width={100} height={100} alt="Picture of the author" />    
            </button>
            <button className='absolute z-50 left-0 h-full bg-black bg-opacity-15 hover:bg-slate-600 hover:bg-opacity-20' onClick={previousProject}>
                <Image className=' -scale-x-100 drop-shadow-glow' src="/resources/arrow.svg" width={100} height={100} alt="Picture of the author" />    
            </button>

            <div className='overflow-clip opacity-gradient-tr h-full'>
                <div className='absolute-centered w-full h-full py-3 relative'>
                    <CarouselCard ref={refLeftHidden} className =' translate-x-[-140%] scale-50 -z-20' child={leftHidden} />
                    <CarouselCard ref={refLeftDisplay} className =' translate-x-[-105%] scale-75 -z-10' child={leftDisplay} />
                    <CarouselCard ref={refCenterDisplay} className =' center-shadow z-10' child={centerDisplay} />
                    <CarouselCard ref={refRightDisplay} className =' translate-x-[15%] scale-75 -z-10' child={rightDisplay} />
                    <CarouselCard ref={refRightHidden} className = ' translate-x-[50%] scale-50 -z-20' child={rightHidden} />
                </div>
            </div>
        </div>
    )
}

export default ProjectCarousel