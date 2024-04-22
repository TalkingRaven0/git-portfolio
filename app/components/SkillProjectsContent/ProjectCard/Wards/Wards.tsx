import React from 'react'
import ProjectCard from '../ProjectCard'

const Wards = () => {
    const description = (
        <div className='m-4 h-fit'>
            <h1 className=' text-lg text-center mb-2'>Website for Displaying Hospitals and their capacities.</h1>
            <h1>Technologies and Skills Used:</h1>
            <ul className=' list-disc columns-2 ml-10'>
                <li>JavaScript</li>
                <li>AJAX</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            <br />
            <h1 className=" text-lg font-semibold">Project Details:</h1>
            <p>
                {"Developed as part of our final thesis in my last year of college. This was developed alongside a Desktop Application and a Hardware Device. I developed the Web Application myself as we all focused on each of our specialities, mine was web development."}
            </p><br /><p>
                {"This utilizes a free API called Leaflet API for the map display, HTML and CSS for the layout and design, and Javascript accompanied by AJAX for everything else."}
            </p><br /><p>
                {"AJAX was utilized for the sort and filter functionalities to prevent the whole page from reloading once the parameters have changed."}
            </p><br /><p>
                {"The list of hospitals and their vacancy numbers are pulled from our own database that we pre-populated for the thesis demo. The database includes the hospitals Longitude and Latitude which is utilized in an SQL query that searches by proximity of the user as detected by Geolocation API or as manually defined by them."}
            </p><br /><p>
                {"The website was only briefly deployed for the purposes of the Thesis Defense Demo. The source code is in my Github Repository but set as Private since the paper is on it's way to be published."}
            </p>
                
        </div>
    )

    return (
        <ProjectCard description={description} src="/projectPictures/Wards.png" projectTitle="Wards" imgHeight='60%'/>
    )
}

export default Wards