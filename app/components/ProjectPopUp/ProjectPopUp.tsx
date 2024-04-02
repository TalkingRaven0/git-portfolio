'use client'
import React, { useState } from 'react'

const ProjectPopUp = (props:any) => {
    
    const [descriptionObject, setDescriptionText] = useState({source:'', text:'',state:false})

    const skillButtonHandler = (skillName: string, description:string) => {
        let newObject = {source: skillName, text:description,state:true}
        if (descriptionObject.source == skillName){
            newObject = {source: '', text: '', state:false}
        }
        setDescriptionText(descriptionObject => newObject)
    }

    return (
        <div>
            {props.isShown && (
                <div className='w-[90vw] h-[80vh] rounded-xl bg-neutral-900 border flex flex-row'>
                    
                </div>
            )}
        </div>
    )
}

export default ProjectPopUp