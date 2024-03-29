'use client'
import React, { useState } from 'react'

const techSkillText = [{
    skillName: "C#",
    description: "Primarily used during my time when I was a hobbyist Game Developer as the primary language in Unity."
},{
    skillName: "JavaScript",
    description: "Used during the development of an internal company project called Project Mars. My primary task there was to implement button functionalities and data handling. This includes simple page redirections, storing of session variables, and usage of 'fetch' to access APIs."
},{
    skillName: "NextJS",
    description: "Used for the creation of this portfolio website. All four of NextJS, React, TypeScript, and Tailwind were all utilized in the creation of this website."
},{
    skillName: "React",
    description: "Used for the creation of this portfolio website. All four of NextJS, React, TypeScript, and Tailwind were all utilized in the creation of this website."
},{
    skillName: "TypeScript",
    description: "Used for the creation of this portfolio website. All four of NextJS, React, TypeScript, and Tailwind were all utilized in the creation of this website."
},{
    skillName: "Tailwind",
    description: "Used for the creation of this portfolio website. All four of NextJS, React, TypeScript, and Tailwind were all utilized in the creation of this website."
},{
    skillName: "SQL",
    description: "Utilized during my college days on school projects and more recently, in my current full-time job. Being part of the Data Team in my current place of employment familiarized me with various data related technologies which incidentally includes SQL databases such as MySQL, Oracle, and PostgreSQL."
},{
    skillName: "NoSQL",
    description: "Introduced to me in my current place of employment. Being part of the Data Team, I was able to familiarize myself with NoSQL, particularly MongoDB as it is heavily utilized by our team."
},{
    skillName: "Java",
    description: "Most recently used by myself to write custom processes in our ETL Tool since the ETL Tool mentioned is written in Java. These custom processes are mild in complexity but highly specific which is why creating them is needed."
},{
    skillName: "Python",
    description: "Used during my college years and when doing coding challenges in LeetCode and HackerRank as a way to quickly put out working code as I find Python to be the most high-level and therefore straightforward programming language."
},{
    skillName: "HTML",
    description: "Majority of my Web Development Experience came from using HTML with the mindset of being able to fully master the base language before taking on any frameworks. I've built a mock version of the old Facebook UI using base web development languages including HTML. I also built websites for school purposes, ranging from my own output, up to building websites for other students with compensation"
},{
    skillName: "PHP",
    description: "This was utilized alongside HTML in my early days of building websites, it was primarily used for handling any sort of computation as well as directly communicating with SQL databases through SQL scripts in order to achieve CRUD functionalities."
},{
    skillName: "CSS",
    description: "This was always used in any web development project I tackle, even this website that is primarily styled using Tailwind still uses native CSS for some niche and specific styling."
},{
    skillName: "Object Oriented Programming",
    description: "Have always utilized the different benefits of Object Oriented Programming ever since I've started to learn to code."
},{
    skillName: "Unity Game Engine",
    description: "Used this game engine to create many game prototypes of game mechanics that I think would be interesting, however almost all has never seen the light of day since after producing said prototypes I tend to abandon the project in favor of a new idea. Except one project that I was able to put out a sort of Beta which is Mr. Dash, more details on that project can be found within the projects area of this website."
},{
    skillName: "GODOT Game Engine",
    description: "After a year and few months of using Unity, I wanted to expand my horizons on game engines. Initially, I aimed for Unreal Engine but found it too daunting of a task at the time so I've landed on a much simpler game engine, Godot. I've learned the basics of this game engine and even made a prototype of a game that has a time manipulation mechanic that is intertwined with the game's physics."
},{
    skillName: "Github Source Control",
    description: "This was never thought in university despite being one of the most important things that a developer should learn especially when working with teams. Due to that, I've familiarized myself with this technology in order to both preserve my projects as well as collaborate with others."
},{
    skillName: "Bitbucket Source Control",
    description: "Used in my current position as the primary source control for our company's tech department. I find it to be mostly the same as github thus my skills from Github was easily transferrable."
},{
    skillName: "QA Automation",
    description: "Used during my 720 Hour Internship as a Junior QA. Primarily utilized Robot Framework for writing scripts"
},{
    skillName: "Agile Workflows",
    description: "Properly used during my 720 Hour Internship where Daily Standups were efficient and the workflow was being utilized to it's fullest. Partially used in my current company but not as fully as it should be."
},]

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
                        <div className = 'flex-auto m-2 justify-normal text-center max-h-[50%]'>
                            <h1 className=' text-xl'> Technical Skills </h1>
                            <div className = 'overflow-auto max-h-[90%]'>
                                {techSkillText.map((skill) => (
                                    <button className=' bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded m-1' key={skill.skillName} onClick={()=>skillButtonHandler(skill.skillName,skill.description)} >{skill.skillName}</button>
                                ))}
                            </div>
                        </div>
                        <hr className=' m-3'></hr>
                        <div className = 'flex-auto m-2 justify-normal text-center overflow-auto'>
                            <h1 className=' text-xl'> Soft Skills </h1>
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