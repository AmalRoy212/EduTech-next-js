import Image from 'next/image'
import React from 'react'

function DetailsProvider() {
  return (
    <div className='md:flex flex-row w-full h-auto py-10 md:py-0'>
      <div data-aos="fade-up-right" className='flex p-3 flex-col md:w-2/4 w-full md:h-screen justify-center items-center'>
        <video src="videos/students.mp4" loop muted autoPlay className='rounded-xl'></video>
        {/* <div className='flex justify-center items-center p-0 m-0 h-full w-full top-0 relative'>
          <Image
            src="/images/PNGs/AI_no_Bg.png"
            alt="Lock top"
            width={300}
            height={300}
            className="absolute"
          />
          <video
              loop
              muted
              autoPlay
              playsInline
              preload="false"
              className="w-full md:h-[70%] object-cover"
              src="/videos/about_background.mp4/"
            />
        </div> */}
      </div>
      <div data-aos="fade-up-left" className='flex flex-col md:w-2/4 w-full md:h-screen h-auto justify-center items-center p-5'>
        <p className='text-base text-gray-400 dark:text-gray-400 md:p-5 text-justify'>
          We believe leaders engaged in reshaping the
          <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> education </span>
            space are truly the backbone of society. At the Future Education Summit, we bring them together under one roof, understand innovations 
            that can help them simplify and improve the education transmittal process. 
            Which will include strategies to engage teacher and students in solving significant 
            problems through EdTech. Future Education Summit will offer world-class content and 
            spotlights effective strategies that will power the pedagogical education models of the 
            21st century by attracting the most dynamic leaders in the education sector and promises 
            to bring fresh insights and perspectives to empower, inspire, and enrich the global learning 
            community Future Education Summit aspires to offer stage to education leaders with inspiring stories, 
            journeys, perspectives and promote networking and collaboration between likeminded peers. The conference 
            will also spotlight disruptive technologies, policy making, innovations, researches and tools and practices
            that have the potential to reshape the 
              <span className='text-transparent bg-clip-text font-bold bg-gradient-to-r from-purple-500 to-cyan-500'> future </span>
            of learning. 
        </p>
      </div>
    </div>
  )
}

export default DetailsProvider