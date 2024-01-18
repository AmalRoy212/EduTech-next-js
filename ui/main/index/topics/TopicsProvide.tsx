import Topics from '@/ui/sub/index/topics/Topics'
import React from 'react'
import DetailHeading from '../headings/DetailHeading'

function TopicsProvide() {
    const data = [
        {
            img : '/images/miniCards/img7.png',
            dis : 'Enhancing STEM Learning Through Technology and Innovation'
        },
        {
            img : '/images/miniCards/img5.png',
            dis : 'Integrating STEM in Curriculum for Excellence'
        },
        {
            img : '/images/miniCards/img3.png',
            dis : 'The impact of artificial intelligence on education'
        },
        {
            img : '/images/miniCards/img8.png',
            dis : 'Cybersecurity in Schools and Universities'
        },
        {
            img : '/images/miniCards/img4.png',
            dis : 'Human Resources Technologies for Schools and Universities'
        },
    ]

    const dataTwo = [
        {
            img : '/images/miniCards/img11.png',
            dis : 'Addressing Teacher Training and Reskilling'
        },
        {
            img : '/images/miniCards/img10.png',
            dis : 'Augmented Reality and Student Learning'
        },
        {
            img : '/images/miniCards/img9.png',
            dis : 'Developing EdTech solutions for Leveraging Local Languages and Cultures'
        },
    ]

    const dataThree =  {
        img : '/images/miniCards/img2.png',
        dis : 'Innovation for Mental Health and Well-being in Education'
    }
  return (
    <>
        <DetailHeading nanoHeading='' mainHeading='KEY TOPICS OF DISCUSSION' miniHeading='' />
        <div className='flex mt-[-7rem] md:flex-row flex-col w-[100%] h-auto justify-center items-center p-10'>
            {data.map((dat, index) => (
                <Topics key={index} data={dat} index={index} />
            ))}
        </div>
        <div className='flex mt-[-10rem] md:flex-row flex-col w-[100%] h-auto justify-center items-center p-10'>
            {dataTwo.map((dat, index) => (
                <Topics key={index} data={dat} index={index} />
            ))}
        </div>
        <div className='flex mt-[-10rem] md:flex-row flex-col w-[100%] h-auto justify-center items-center p-10'>
            <Topics key={90} index={3} data={dataThree}/>
        </div>
    </>
  )
}

export default TopicsProvide