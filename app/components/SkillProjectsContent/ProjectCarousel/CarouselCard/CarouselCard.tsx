import React, { forwardRef } from 'react'

const CarouselCard = forwardRef(function CarouselCard({className,child}:{className:string, child:React.JSX.Element},ref:any) {
  return (
    <div ref={ref} className={'absolute-centered w-[50vw] h-full bg-slate-900 border-2 border-sky-400 '+ className}>
        {child}
    </div>
  )
});

export default CarouselCard