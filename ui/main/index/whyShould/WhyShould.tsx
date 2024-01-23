import React from 'react'
import WhyCards from '@/ui/sub/index/whyCards/WhyCards'

function WhyShould() {

    const data=[
        {
            heading:'WHY SHOULD GOVERNMENTS ATTEND?',
            content:`Draft new regulations, meet potential partners, network with global Education Technology experts
            Learn from industry experts and thought leaders to help draft new regulations and policies
            Explore latest EdTech innovations from established tech leaders and emerging startups
            Explore collaboration opportunities with top global technology enterprises
            Network with elite EdTech experts, business owners, investors and startups
            Identify and incentivize local startups with a potential to develop innovative solutions and services`
        },
        {
            heading:'WHY SHOULD EDUCATIONAL INSTITUTIONS ATTEND?',
            content:`Interact directly with customers seeking suitable product solutions
            Explore innovative EdTech products, network with regional governments and potential partners
            Explore latest EdTech innovations from established tech leaders and emerging startups
            Learn from the world’s top-most EdTech, STEM experts from successful use-cases, implementation, roadblocks and much more
            Find relevant startups for collaboration to develop products and services of mutual interest `
        },
        {
            heading:'WHY SHOULD STARTUPS ATTEND?',
            content:`Showcase innovations, get brand exposure and network with investors to help raise funds
            Showcase your innovations in front of early who are eager to explore EdTech solutions in their institutions 
            Showcase Your Products & Services to several educators, researchers, and eager investors attending the event
            Raise funds by meeting with potential investors interested in your type of product and solutions
            Present your ideas and innovations in front of curated audience consisting of investors, senior government authorities and global education technology enterprises
            Get maximum brand exposure through regional and international media, tech-bloggers and journalists
            Learn and network with international EdTech experts and regional policy makers`
        },
        {
            heading:'WHY SHOULD INVESTORS ATTEND?',
            content:`Meet curated startup, network with elites from enterprises, governments and global EdTech experts
            Meet curated startups that have potential value in a growth-oriented markets and practical solutions to real problems
            Get privileged access to startup pitch decks that are curated and approved by our advisory board comprising of investors, thought leaders and senior technology fellows
            Access to dedicated networking lounge specially reserved for speakers, investors and VIPs attending the show
            Receive startup pitch decks much prior to the event, so you can come prepared with your customized questions to them`
        },
    ]

    return (
        <div className='w-full h-auto z-[19] flex flex-col p-10' >
            <div className="text-[40px] font-medium text-center text-gray-200">
                Why
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    {" "}
                    should{" "}
                </span>
                attend?
            </div>
            <div className='w-full h-auto md:flex  pt-[5rem] gap-5 '>
                {data.slice(0, 2).map((dat,index) => (
                  <WhyCards key={index} heading={dat.heading} content={dat.content}/>
                ))}
            </div>
            <div className='w-full h-auto md:flex mt-[-6rem] pt-[5rem] gap-5'>
                {data.slice(2).map((dat,index) => (
                  <WhyCards key={index + 2} heading={dat.heading} content={dat.content}/>
                ))}
            </div>
        </div>
    )
}

export default WhyShould