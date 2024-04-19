import Cards from '@/ui/main/cards/Cards'
import Pricing from '@/ui/main/index/Pricing'
import DetailsHolder from '@/ui/main/index/aboutEvent/DetailsHolder'
import Card from '@/ui/main/index/cards/Card'
import ContactUs from '@/ui/main/index/contactUs/ContactUs'
import Encryption from '@/ui/main/index/encryption/Encryption'
import End from '@/ui/main/index/end/End'
import Hero from '@/ui/main/index/hero/Hero'
import Sponsors from '@/ui/main/index/sponsors/Sponsors'
import StartUp from '@/ui/main/index/startUp/StartUp'
import TopicsProvide from '@/ui/main/index/topics/TopicsProvide'
import WhoIndustries from '@/ui/sub/index/WhyIndustries/WhyIndustries'

export default function Home() {
  return (
    <main className='h-full w-full md:w-[100%] overflow-hidden'>
      <div className='flex flex-col '>
        <Hero />
        <DetailsHolder />
        <Card />
        <Encryption />
        <Cards />
        <TopicsProvide />
        <WhoIndustries />
        <Pricing/>
        <Sponsors />
        <StartUp />
        <End />
        <ContactUs />
      </div>
    </main>
  )
}
