import React from 'react'

function Counter() {
  return (
    <div data-aos='fade-up' data-aos-duration={3000} className='w-full h-auto flex absolute justify-center items-center z-20 md:top-0 md:mt-[4rem] mt-[49rem]'>
        <div className='w-full md:h-[130px] h-[120px] rounded-2xl bg-gradient-to-r from-purple-800 to-cyan-00 flex  p-1'>
           <div className='w-[25%] h-full rounded-2xl flex flex-col justify-center items-center'>
                <h1 className='text-white mb-5 md:text-[40px] text-[30px]'>20</h1>
                <h1 className='text-white rounded-lg text-[10px] md:text-[15px] border p-2'>DAYS</h1>
           </div>
           <div className='w-[25%] h-full rounded-2xl   flex flex-col justify-center items-center'>
                <h1 className='text-white mb-5 md:text-[40px] text-[30px]'>20</h1>
                <h1 className='text-white rounded-lg text-[10px] md:text-[15px] border  p-2'>HOURS</h1>
           </div>
           <div className='w-[25%] h-full rounded-2xl flex flex-col justify-center items-center'>
                <h1 className='text-white mb-5 md:text-[40px] text-[30px]'>20</h1>
                <h1 className='text-white rounded-lg text-[10px] border md:text-[15px] p-2'>MINUTES</h1>
           </div>
           <div className='w-[25%] h-full rounded-2xl flex flex-col justify-center items-center'>
                <h1 className='text-white mb-5 md:text-[40px] text-[30px]'>20</h1>
                <h1 className='text-white rounded-lg text-[10px] border md:text-[15px] p-2'>SECONDS</h1>
           </div>
        </div>
    </div>
  )
}

export default Counter