import React from 'react'
import ProjectBox from "./ProjectBox";
import Heading from "../../HelperComp/Heading";

const Projects = ({ ProjectData }) => {
  return (
   <div className='h-full page-shadow bg-white p-10'>
       <Heading title="Projects" subtitle="Showcasing my work with Bootstrap, HTML, CSS, JavaScript,Tailwind css, React, and Nodejs, from responsive designs to dynamic web apps."/>


    
        <div>
            <ProjectBox ProjectData={ProjectData}/>
        </div>
        </div>
  )
}

export default Projects
