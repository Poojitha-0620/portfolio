import React from 'react'
import profilePic from "../../../assets/profilePic.png";



const FirstPage = () => {
  return (
    <div className='h-full'>
      <main className='h-full w-full bg-secondary page-shadow'>
         <div className='px-10 space-y-4'>
            {/*image*/}
            <div>
                <img src={profilePic} alt=""  className='w-[450px] mx-auto'/>
            </div>
            <div>
             <div className='space-y-3'>
             <p className="uppercase">Hello</p>
             <p className="text-4xl md:text-6xl font-bold text-black/80">I'm Poojitha</p>
             <p className="text-black/75 text-left">Full Stack Developer</p>
             <p className="text-black/75">I'm  a Full Stack Developer specializing in React, Node.js, and modern technologies. I build high-performance, scalable applications with clean, efficient code, creating seamless digital experiences.</p>
             <a className='inline-block primary-btn' href="mailto:Tq6cM@example.com">Hire me</a>
             </div>
            </div>
           
         </div>
      </main>
    </div>
  )
}

export default FirstPage
