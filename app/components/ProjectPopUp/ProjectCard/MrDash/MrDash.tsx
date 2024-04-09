import React from 'react'
import ProjectCard from '../ProjectCard'

const MrDash = () => {
    const description = (
        <div className='m-4 h-fit'>
            <h1 className=' text-lg text-center'>2D Sidescrolling Platformer Made in Unity.</h1>
            <h1>Technologies and Skills Used:</h1>
            <ul className=' list-disc ml-10'>
                <li>Unity Game Engine</li>
                <li>C#</li>
                <li>Game Development</li>
            </ul>
            <br />
            <h1 className=" text-lg font-semibold">Storytime:</h1>
            <p>
                This project was my third attempt at making a game in Unity but the first projects got stuck in prototyping as their scopes was unrealistic for the development time that I gave myself.
            </p><br /><p>
                Utilized C# primarily for coding in functionalities and used a module-based philosophy when making the game objects, particularly the traps.
            </p><br /><p>
                It was primarily made with scalability in mind and make it easier for myself to create new game objects if I ever decide to expand the project.
            </p><br /><p>
                As it currently stands, it has 5 levels, and it is currently playable in itch.io.
            </p>
                
        </div>
    )

    return (
        <ProjectCard description={description} src="/projectPictures/mDash.png" projectTitle="Mr. Dash"/>
    )
}

export default MrDash