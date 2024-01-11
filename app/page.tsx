import Card from '@/ui/main/index/cards/Card'
import Encryption from '@/ui/main/index/encryption/Encryption'
import Hero from '@/ui/main/index/hero/Hero'
import ProgressBar from '@/ui/main/index/progressbar/bar/ProgressBar'
import CircleProgressBar from '@/ui/main/index/progressbar/circle/CircleProgressBar'
import Skills from '@/ui/main/index/skills/Skills'
import VideoProvider from '@/ui/main/index/video/VideoProvider'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Hero/>
        <VideoProvider />
        <Card />
        <Encryption />
        {/* <SummitAttendees /> */}
        {/* <Skills/>
        <ProgressBar value={60} maxValue={100} />
        <CircleProgressBar value={70} maxValue={100}/> */}
      </div>
    </main>
  )
}
