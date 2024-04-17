"use client";
import SummitAttendees from "../attendies/Attedies";

export default function ExtraCards() {
  return (
    <section id="attendies">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-[40px] font-medium text-center text-gray-200">
        ATTENDEES
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
             &{" "}
         </span>
          INDUSTRIES
        </div>
        <div className="py-12 md:py-20 border-gray-800">

          {/* Section header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Knowledge Unites, Opportunities Multiply</div>
            <h1 className="h2 mb-4">One product, unlimited solutions</h1>
            <p className="text-xl text-gray-400">Join our educational event and network with a diverse array of professionals! Connect with prequalified delegates, industry experts, organizations, sponsors & partners, and investors. Elevate your knowledge and expand your opportunities in just one event.</p>
          </div> */}

          {/* Items */}
          <div className="grid gap-20">
            <SummitAttendees />
          </div>
        </div>
      </div>
    </section>
  )
}


// const Encryption = () => {
//   return (
//     <>
//     <div className="w-ful h-auto top-0 z-[5]">
        // <motion.div
        //   variants={slideInFromTop}
        //   className="text-[40px] font-medium text-center text-gray-200"
        // >
        //   ATTENDEES
        //   <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        //     {" "}
        //     &{" "}
        //   </span>
        //   INDUSTRIES
        // </motion.div>
//       </div>
    // <div className="flex flex-row relative items-center justify-center min-h-screen w-full md:h-full h-[130vh]">
    //   <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-full h-auto">
    //     <div className="flex flex-col items-center group cursor-pointer w-[100%] h-auto pt-[5rem]">
    //       <SummitAttendees />
    //     </div>
    //   </div>

    //   <div className="w-full flex items-start justify-center absolute">
    //     <video
    //       loop
    //       muted
    //       autoPlay
    //       playsInline
    //       preload="false"
    //       className="w-full h-auto"
    //       src="/videos/encryption.webm/"
    //     />
    //   </div>
//     </div>
//     </>
//   );
// };

// export default Encryption;