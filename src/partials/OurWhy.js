import React from "react";
import WhyBox from "./WhyBox";
import {
  faHandsHelping,
  faUniversalAccess,
  faUsers,
  faBookReader,
  faHeart,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";

function OurWhy() {
  const boxes = [
    {
      header: "Social impact",
      text: "It is the measure of our success. Through each interaction, we aim to make our world a little bit better.",
      icon: faHandsHelping,
    },
    {
      header: "People first",
      text: "The people we serve are our highest priority, and their interests are at the heart of everything we do.",
      icon: faUsers,
    },
    {
      header: "Knowledge is Power",
      text: "It should be accessible to all, regardless of age, race, sex, orientation, wealth, religion, or personal circumstance.",
      icon: faBookReader,
    },
    {
      header: "Better Together",
      text: "Sharing our unique knowledge and experiences can help others facing their own challenges, similar or not.",
      icon: faHeart,
    },
    {
      header: "Diversity",
      text: "So much more than a ‘politically correct’ box to tick, inclusion and diversity are non-negotiable must-haves.",
      icon: faUniversalAccess,
    },
    {
      header: "Inclusivity",
      text: "Differences in background are to be celebrated, and make for richer, more meaningful experiences.",
      icon: faHandHoldingHeart,
    },
  ];

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <h2 className="max-w-3xl mx-auto text-center pb-8 h2 mb-4">
            Our Why
          </h2>
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3  items-start md:max-w-2xl lg:max-w-none">
            {boxes.map(({ header, text, icon }) => (
              <WhyBox header={header} text={text} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurWhy;
