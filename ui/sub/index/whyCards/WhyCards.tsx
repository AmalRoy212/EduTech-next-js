import React from 'react'
import SubHeadings from '../../headers/SubHeadings'

interface Iprops{
    heading:string
    content:any
}

function WhyCards({heading,content}:Iprops) {
  return (
    <div data-aos="zoom-in" className='w-[100%] md:w-1/2 h-auto bg-slate-800 rounded-xl my-5 '>
        <div className='flex w-[100%] h-auto text-center '>    
          <SubHeadings heading={heading} fontSize={8}/>
        </div>
        <p className='text-gray-300 px-5 py-2 text-justify'>{content[0]}</p>
        <p className='text-gray-300 px-5 py-2 text-justify'>{content[1]}</p>
        <p className='text-gray-300 px-5 py-2 text-justify'>{content[2]}</p>
        <p className='text-gray-300 px-5 py-2 text-justify'>{content[3]}</p>
        <p className='text-gray-300 px-5 py-2 text-justify'>{content[4]}</p>
    </div>
  )
}

export default WhyCards