import Cards from '@/ui/main/cards/Cards'
import DetailsHolder from '@/ui/main/index/aboutEvent/DetailsHolder'
import Card from '@/ui/main/index/cards/Card'
import Encryption from '@/ui/main/index/encryption/Encryption'
import Hero from '@/ui/main/index/hero/Hero'
import Industries from '@/ui/main/index/industries/Industries'
import Skills from '@/ui/main/index/skills/Skills'
import TopicsProvide from '@/ui/main/index/topics/TopicsProvide'
import WhyShould from '@/ui/main/index/whyShould/WhyShould'

export default function Home() {
  return (
    <main className='h-full w-full md:w-[100%] overflow-hidden'>
      <div className='flex flex-col gap-20'>
        <Hero/>
        <DetailsHolder/>
        <Card />
        <Encryption />
        <Cards />
        <TopicsProvide/>
        <WhyShould/>
        {/* <Industries /> */}
        {/* <SummitAttendees /> */}
        {/* <Skills/>
        <ProgressBar value={60} maxValue={100} />
        <CircleProgressBar value={70} maxValue={100}/> */}
      </div>
    </main>
  )
}
