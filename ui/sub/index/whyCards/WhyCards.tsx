import React from 'react'
import SubHeadings from '../../headers/SubHeadings'

interface Iprops{
    heading:string
    content:string
}

function WhyCards({heading,content}:Iprops) {
  return (
    <div data-aos="zoom-in" className='w-[100%] md:w-1/2 h-auto bg-slate-800 rounded-xl my-5 '>
        <div className='flex w-[100%] h-auto text-center '>    
          <SubHeadings heading={heading} fontSize={8}/>
        </div>
        <p className='text-gray-300 p-5 text-justify'>{content}</p>
    </div>
  )
}

export default WhyCards