'use client'
import React from 'react'
import {motion} from 'framer-motion'
function DetailsHolder() {
  return (
    <>
    <div className='w-full h-[30px] md:h-[100px] flex-row mt-[100px] flex items-center justify-center'>
        <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        
        
        className='md:text-[40px] text-[20px]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>GLOBAL FUTURE EDUCATION SUMMIT</motion.h1>
    </div>
    <div className='w-full h-[250px] md:h-[500px] flex items-center justify-center'>
        <img src="/images/AI.jpg" alt="404" className='w-[200px] md:w-[450px] rounded-lg ' />
    </div>
    <div className='w-full h-full md:h-auto flex items-center justify-center p-10 md:p-20 text-justify'>
        <p className='text-gray-300 '>The Global Future Education Summit is a premier gathering of educators, policymakers, and innovators worldwide. It's a platform for discussing the future of education, embracing technological advancements, and sharing insights to shape innovative learning approaches. Through workshops, keynotes, and collaborations, it aims to drive meaningful changes in education globally.We believe leaders engaged in reshaping the education space are
            truly the backbone of society. At the Future Education
            Summit, we bring them together under one roof, understand innovations that can help them simplify and
            improve
            the
            education transmittal process. Which will include strategies to engage teacher and students in solving
            significant problems through EdTech. Future
            Education Summit will offer world-class content and spotlights effective strategies that will power the
            pedagogical
            education models of the 21st century by attracting the most dynamic leaders in the education sector and
            promises to
            bring fresh insights and perspectives to empower, inspire, and enrich the global learning community Future
            Education
            Summit aspires to offer stage to education leaders with inspiring stories, journeys, perspectives and
            promote
            networking
            and collaboration between likeminded peers. The conference will also spotlight disruptive technologies,
            policy
            making,
            innovations, researches and tools and practices that have the potential to reshape the future of learning.
            Mangalore is known as an educational hub in India. It's home to many universities, schools, and colleges.
            Students
            from
            all over India and other countries.</p>
    </div>
</>
  )
}

export default DetailsHolder


