export default function Blocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-[40px] z-[9] font-medium text-center text-gray-200">
          WHO
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            SHOULD{" "}
          </span>
          ATTEND ?
        </div>
        <div className="py-12 md:py-20 border-gray-800">
          {/* Section header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="mb-4">Empower Your Industry Knowledge</h2>
            <p className="text-xl text-gray-400">Cultivate your expertise and join us as an active participant in shaping the future of education.</p>
          </div> */}

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-20 h-20 mb-4 bg-white rounded-full p-3">
                <img className="w-full h-full" src="/images/cards/flowchart.png" alt="" />
              </div>
              <h3 className="mb-2">Ministries & Authorities</h3>
              <p className="text-base text-gray-400 text-center">Government institutions and regulators responsible for setting standards and framework for the education eco-system</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-20 h-20 mb-4 bg-white rounded-full p-3">
                <img className="w-full h-full" src="/images/cards/collage.png" alt="" />
              </div>
              <h3 className="mb-2">Head of Educational Institutions</h3>
              <p className="text-base text-gray-400 text-center">Executive Principal, Principal, Head Taeacher, Deputy Head, Head of Primary & Secondary, Head of Universities etc</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-20 h-20 mb-4 bg-white rounded-full p-3">
                <img className="w-full h-full" src="/images/cards/Inversiones.png" alt="" />
              </div>
              <h3 className="mb-2">Investors & Owners</h3>
              <p className="text-base text-gray-400 text-center">Private Equity, Venture Capital, Impact Investors, Family Businesses & Investment Authorities</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-20 h-20 mb-4 bg-white rounded-full p-3">
                <img className="w-full h-full" src="/images/cards/network.png" alt="" />
              </div>
              <h3 className="mb-2">Key Stakeholders</h3>
              <p className="text-base text-gray-400 text-center">Active players in the education ecosystem</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-20 h-20 mb-4 bg-white rounded-full p-3">
                <img className="w-full h-full" src="/images/cards/flowchart.png" alt="" />
              </div>
              <h3 className="mb-2">Head of Departments</h3>
              <p className="text-base text-gray-400 text-center">Service / Solution providers, product suppliers, consultants, technology vendors & companies supporting the education eco-system</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-20 h-20 mb-4 bg-white rounded-full p-3">
                <img className="w-full h-full" src="/images/cards/enterpriser.png" alt="" />
              </div>
              <h3 className="mb-2">Enterprise Organizations</h3>
              <p className="text-base text-gray-400 text-center">Government institutions and regulators responsible for setting standards and framework for the education eco-system</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}