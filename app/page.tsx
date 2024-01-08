import Card from '@/ui/main/cards/Card';
import Encryption from '@/ui/main/encryption/Encryption';
import Hero from '@/ui/main/hero/Hero';
import ProgressBar from '@/ui/main/progressbar/bar/ProgressBar';
import CircleProgressBar from '@/ui/main/progressbar/circle/CircleProgressBar';
import Skills from '@/ui/main/skills/Skills';
import VideoProvider from '@/ui/main/video/VideoProvider';
import Link from 'next/link'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Hero/>
        <VideoProvider />
        {/* <Skills/> */}
        {/* <ProgressBar value={60} maxValue={100} />
        <CircleProgressBar value={70} maxValue={100}/> */}
        {/* <Encryption />
        <Card /> */}
      </div>
    </main>
  )
}
