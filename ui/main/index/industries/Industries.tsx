import React from 'react'
import ProgressBar from '../progressbar/bar/ProgressBar'

function Industries() {
  return (
    <div className='flex flex-row p-5 justify-center items-center bg-white h-[50vh] w-full'>
      <ProgressBar title={"nothing"} index={1} value={70} maxValue={100} />
    </div>
  )
}

export default Industries
