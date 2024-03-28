import React from 'react'

const SectionButton = (props:any) => {

    return (
        <button className=' text-center rounded-t-lg bg-neutral-700 py-2 font-mono text-xl flex-1 w-fit mx-5 drop-shadow-glow'>
            {props.sectionName}
        </button>
    )
}

export default SectionButton