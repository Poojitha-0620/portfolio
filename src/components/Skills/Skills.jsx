import React from 'react'
import  SkillsLevel from "./SkillLevel"
const Skills = () => {
  return (
    <div className='h-full page-shadow bg-white  px-10'>

      <div>
        <div>
        <div className="relative">
    {/* Large faded background text */}
    <div className="text-center text-6xl xl:text-8xl font-bold text-black/5">
        SKILLS
    </div>
    
    {/* Centered foreground heading */}
    <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-semibold text-black">
         Skills
    </h1>
</div>

        </div>
        <div className='space-y-10'>
            <SkillsLevel skillName="HTML" percentage={"90%"}/>
            <SkillsLevel skillName="CSS" percentage={"95%"}/>
            <SkillsLevel skillName="Tailwind css" percentage={"80%"}/>
            <SkillsLevel skillName="Bootstrap" percentage={"90%"}/>
            <SkillsLevel skillName="Reactjs" percentage={"90%"}/>
        </div>
      </div>
    </div>
  )
}

export default Skills
