import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constants/data'
import SkillDataProvider from '@/ui/sub/index/skillDataProvider/SkillDataProvider'
import SkillText from '@/ui/sub/index/skillText/SkillText'
import React from 'react'

function Skills() {
  return (
    <section
      id="skills"
      className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'
      style={{transform:'scale(0.9)'}}
    >

      <SkillText/>

      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Skill_data.map((img, index) => (
          <SkillDataProvider 
            key={index}
            src={img.Image} 
            width={img.width}
            height={img.height}
            index={index}
          />
        ))}
      </div>


      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Frontend_skill.map((img, index) => (
          <SkillDataProvider 
            key={index}
            src={img.Image} 
            width={img.width}
            height={img.height}
            index={index}
          />
        ))}
      </div>


      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Backend_skill.map((img, index) => (
          <SkillDataProvider 
            key={index}
            src={img.Image} 
            width={img.width}
            height={img.height}
            index={index}
          />
        ))}
      </div>


      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Full_stack.map((img, index) => (
          <SkillDataProvider 
            key={index}
            src={img.Image} 
            width={img.width}
            height={img.height}
            index={index}
          />
        ))}
      </div>


      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Other_skill.map((img, index) => (
          <SkillDataProvider 
            key={index}
            src={img.Image} 
            width={img.width}
            height={img.height}
            index={index}
          />
        ))}
      </div>


    </section>
  )
}

export default Skills
