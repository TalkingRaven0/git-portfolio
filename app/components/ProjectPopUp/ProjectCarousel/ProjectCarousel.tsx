import React, { useEffect } from 'react'

var currentIndex = 0;

const ProjectCarousel = ({children,carouselIndexMove, callback}: {children:Array<React.JSX.Element>,carouselIndexMove:number, callback: Function}) => {
    const centerDisplay = children[currentIndex];
    const leftDisplay = (currentIndex==0) ? children[children.length-1] : children[currentIndex-1];
    const rightDisplay = (currentIndex >= children.length-1) ? children[0] : children[currentIndex+1];

    useEffect(()=>{
        if (carouselIndexMove == 1){
            nextProject();
        } else if (carouselIndexMove == -1){
            previousProject();
        }
        callback(0);
    },[carouselIndexMove])

    function nextProject(){
        if(currentIndex >= children.length-1){
            currentIndex = 0;
        } else {
            currentIndex+=1;
            console.log(currentIndex);
        }
    }

    function previousProject(){
        if(currentIndex == 0){
            currentIndex = children.length-1;
        } else {
            currentIndex-=1;
        }
    }

    return (
        <div className=' flex flex-row w-fit h-full'>
            {leftDisplay}
            {centerDisplay}
            {rightDisplay}
        </div>
    )
}

export default ProjectCarousel