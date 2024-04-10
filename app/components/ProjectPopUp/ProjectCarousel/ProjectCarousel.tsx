import Image from 'next/image';
import React, { useState } from 'react'

const ProjectCarousel = ({children}: {children:Array<React.JSX.Element>}) => {
    const [currentIndex,currentIndexSet] = useState(0);

    const centerDisplay = children[currentIndex];
    const leftDisplay = (currentIndex==0) ? children[children.length-1] : children[currentIndex-1];
    const rightDisplay = (currentIndex >= children.length-1) ? children[0] : children[currentIndex+1];

    function nextProject(){
        if(currentIndex >= children.length-1){
            currentIndexSet(0);
        } else {
            currentIndexSet(currentIndex+1);
        }
    }

    function previousProject(){
        if(currentIndex == 0){
            currentIndexSet(children.length-1);
        } else {
            currentIndexSet(currentIndex-1);
        }
    }

    return (
        <div className='flex-auto h-1/3 mx-8 my-5 relative'>
            <button className=' absolute z-50 right-0 h-full bg-black bg-opacity-15 hover:bg-slate-600 hover:bg-opacity-20' onClick={nextProject}>
                <Image className=' drop-shadow-glow' src="/resources/arrow.svg" width={100} height={100} alt="Picture of the author" />    
            </button>
            <button className='absolute z-50 left-0 h-full bg-black bg-opacity-15 hover:bg-slate-600 hover:bg-opacity-20' onClick={previousProject}>
                <Image className=' -scale-x-100 drop-shadow-glow' src="/resources/arrow.svg" width={100} height={100} alt="Picture of the author" />    
            </button>

            <div className='overflow-clip opacity-gradient h-full'>
                <div className=' flex flex-row w-fit h-full py-3 relative center left-1/2 -translate-x-1/2'>
                    <div className=' z-0 absolute w-full h-full bg-black opacity-30'></div>
                    <div className=' flex scale-75 -mr-52 -z-10 h-auto'>
                        {leftDisplay}
                    </div>
                    <div className=' flex center-shadow z-10 h-auto'>
                        {centerDisplay}
                    </div>
                    <div className=' flex scale-75  -ml-52 -z-10 h-auto'>
                        {rightDisplay}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCarousel