import React from 'react'
import ServicesBox from './ServicesBox';
import Heading from '../HelperComp/Heading';
const Services = () => {
  return (
    <div  className='h-full page-shadow bg-white  p-10'>
      <Heading title="Services" subtitle="I build fast, scalable web apps with React, Django, Node.js, and MySQL, delivering seamless front-end and back-end solutions."/>
     
      <div>
        <ServicesBox/>
      </div>
    </div>
  )
}

export default Services
