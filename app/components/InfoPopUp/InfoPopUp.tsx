'use client'
import React, { useState } from 'react'
import techSkillText from './techSkills.json'
import softSkillText from './softSkills.json'

const InfoPopUp = (props:any) => {
    
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
                    <div className = 'flex-auto m-2 flex flex-col'>
                        <div className = 'flex-auto m-2 justify-normal text-center max-h-[40%]'>
                            <h1 className=' text-xl font-mono font-bold m-3 mt-0'> Technical Skills </h1>
                            <div className = 'overflow-auto max-h-[90%]'>
                                {techSkillText.map((skill) => (
                                    <button className=' bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded m-1' key={skill.skillName} onClick={()=>skillButtonHandler(skill.skillName,skill.description)} >{skill.skillName}</button>
                                ))}
                            </div>
                        </div>
                        <hr className=' m-3'></hr>
                        <div className = 'flex-auto m-2 justify-normal text-center overflow-auto'>
                            <h1 className=' text-xl font-mono font-bold m-3 mt-0'> Soft Skills </h1>
                            <div className=' overflow-auto'>
                                {softSkillText.map((skill) => (
                                    <div className=' inline-block bg-neutral-500 text-white font-bold py-2 px-4 rounded m-1' key={skill} >{skill}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className = {'flex-none m-2 w-1/4 '+ (descriptionObject.state ? 'block' : 'hidden') + ' text-justify p-5' }>
                        <h1 className=' text-center'>{descriptionObject.source}</h1>
                        {descriptionObject.text}
                    </div>
                </div>
            )}
        </div>
    )
}

export default InfoPopUp