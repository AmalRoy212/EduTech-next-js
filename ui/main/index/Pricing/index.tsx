"use client";
import { useState } from "react";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import SectionTitle from "@/ui/sub/index/sectionTitle/SectionTitle";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="text-[40px] z-[9] font-medium text-center text-gray-200 mb-5">
          AFFORDABLE
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            PRICINGS{" "}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:px-40 px-5 border-t-slate-800 pt-5">
          <PricingBox
            packageName="Standard Pass"
            price={"₹ 9,999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Secure your standard tickets today and unlock the following exclusive benefits."
          >
            <OfferList text="Exhibition Zone" status="active" />
            <OfferList text="Global Future Education Stage" status="active" />
            <OfferList text="Networking Zone with Coffee & Snacks" status="inactive" />
            <OfferList text="Executive Lunch" status="inactive" />
            <OfferList text="Priority Seating" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Business Pass"
            price={"₹ 19,999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Business Pass now and enjoy exclusive perks tailored to elevate your experience."
          >
            <OfferList text="Exhibition Zone" status="active" />
            <OfferList text="Global Future Education Stage" status="active" />
            <OfferList text="Networking Zone with Coffee & Snacks" status="active" />
            <OfferList text="Executive Lunch" status="inactive" />
            <OfferList text="Priority Seating" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="VIP Pass"
            price={"₹ 29,999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Snag your VIP Pass now for top-tier perks that elevate your experience."
          >
            <OfferList text="Exhibition Zone" status="active" />
            <OfferList text="Global Future Education Stage" status="active" />
            <OfferList text="Networking Zone with Coffee & Snacks" status="active" />
            <OfferList text="Executive Lunch" status="active" />
            <OfferList text="Priority Seating" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Enterprise Delegate Pass"
            price={"₹ 39,999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Secure your Enterprise Delegate Pass for unparalleled networking and growth."
          >
            <p>For C-level, Directors & Senior Managers from enterprises only</p>
            <OfferList text="Exhibition Zone" status="active" />
            <OfferList text="Global Future Education Stage" status="active" />
            <OfferList text="Networking Zone with Coffee & Snacks" status="active" />
            <OfferList text="Executive Lunch" status="active" />
            <OfferList text="Priority Seating" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
