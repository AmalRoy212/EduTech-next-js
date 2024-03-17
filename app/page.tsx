import Cards from '@/ui/main/cards/Cards'
import DetailsHolder from '@/ui/main/index/aboutEvent/DetailsHolder'
import Card from '@/ui/main/index/cards/Card'
import ContactUs from '@/ui/main/index/contactUs/ContactUs'
import Encryption from '@/ui/main/index/encryption/Encryption'
import End from '@/ui/main/index/end/End'
import Hero from '@/ui/main/index/hero/Hero'
import Industries from '@/ui/main/index/industries/Industries'
import Sponsors from '@/ui/main/index/sponsors/Sponsors'
import StartUp from '@/ui/main/index/startUp/StartUp'
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
        <Sponsors />
        <WhyShould/>
        <StartUp/>
        <End/>
        <ContactUs />
      </div>
    </main>
  )
}
