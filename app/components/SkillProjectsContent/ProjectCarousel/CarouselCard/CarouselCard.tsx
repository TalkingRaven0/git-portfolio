import React from 'react'

const CarouselCard = ({extraClasses,child}:{extraClasses:string, child:React.JSX.Element}) => {
  return (
    <div className={' w-[50vw] bg-slate-900 border-2 border-sky-400'+extraClasses}>
        {child}
    </div>
  )
}

export default CarouselCard