import React from "react";
import '@/ui/main/index/sponsors/sponsor.css'

function SponsordsData({imgSrc} : any) {
  return (
    <div className="containe md:px-0 px-5 flex items-center justify-center md:w-[200px] md:h-[200px] w-[150px] h-[150px]">
      <img className="object-contain" src={`/images/clients/${imgSrc}`} />
    </div>
  ); 
}

export default SponsordsData;
