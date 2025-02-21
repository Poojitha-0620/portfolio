import React from 'react'
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Heading from "../../HelperComp/Heading";

const About = () => {
  return (
    <div className='h-full page-shadow bg-white p-10'>
        
      <Heading title="About" subtitle="I'm a Full-Stack Developer crafting fast, scalable web apps with React, Django, and Node.js."/>
     
    <div className='mt-10 text-slate-500 text-center' >
            <p>I love problem-solving and staying updated with the latest technologies. From intuitive UI design to optimized database performance, I focus on delivering high-quality, efficient, and impactful digital solutions.</p>
            <br />
            <p>Passionate about building fast, scalable, and user-friendly web applications. With expertise in React, Django, and Node.js, I create seamless front-end experiences and powerful back-end solutions.</p>
        </div>

        <div className='flex justify-center space-x-4 mt-10'> 
            <MdFacebook className="social-btn"/>
            <AiFillInstagram className="social-btn"/>
            <AiFillGithub className="social-btn"/>
            <AiFillLinkedin className="social-btn"/>
        </div>
      <div className='flex  space-x-4 mt-4'>
        <a href="#" className='primary-btn'>Download Resume</a>
        <a href="#" className='outline-btn'>Contact</a>
      </div>
    </div>
  )
}

export default About;

