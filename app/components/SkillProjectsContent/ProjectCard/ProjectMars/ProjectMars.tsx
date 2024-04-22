import React from 'react'
import ProjectCard from '../ProjectCard'

const ProjectMars = () => {
    const description = (
        <div className='m-4 h-fit'>
            <h1 className=' text-lg text-center'>Simple Static Website for Internal Use</h1>
            <h1>Technologies and Skills Used:</h1>
            <ul className=' list-disc columns-2 ml-10'>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Next.JS</li>
                <li>React.JS</li>
                <li>Tailwind CSS</li>
            </ul>
            <br />
            <h1 className=" text-lg font-semibold">Storytime:</h1>
            <p>
                This project uses fetch for various GET APIs already developed in the company, while another team member developed a PUT API specifically for this project for storing the data from the web application.
            </p><br/><p>
                Initially our team only consisted of 2 Juniors, my teammate specialized in writing APIs using SpringBoot and I had more background in terms of Web Development. Our task initially was split by my teammate handling HTML/CSS side as the requirements weren&apost clear yet to start the Backend Development and I provide functionality via JavaScript while also modifying the HTML/CSS to be better structured and more readable for JavaScript such as normalizing classes and adding IDs to elements.
            </p><br/><p>
                We also lacked a Business Analyst for the first month of the project so we had to fill that role ourselves. I primarily focused on communicating with the Project Owner regarding the details that we need in order to start and/or continue development, questions such as UX questions, validations, screen flow and other small details important to us as a development team. After we got a Business Analyst, we communicated with her the information we have and what we still need and she went on to create the various documentations needed for this to be a full fledged project.
            </p><br/><p>
                After finishing a big portion of the project, while I had no pending tasks in my side since I was now waiting for the API to be developed, I worked on translating the whole website into using Next.JS, React.JS, and Tailwind whenever I didn&apost have other tasks that needed attention.
            </p>
                
        </div>
    )

    return (
        <ProjectCard description={description} src="/projectPictures/sbxLogo.png" projectTitle="Project Mars"/>
    )
}

export default ProjectMars