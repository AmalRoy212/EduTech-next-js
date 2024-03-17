import React from "react";
import '@/ui/main/index/sponsors/sponsor.css'

function SponsordsData({imgSrc} : any) {
  return (
    <div className="container">
      <img src={`/images/clients/${imgSrc}`} />
    </div>
  );
}

export default SponsordsData;
