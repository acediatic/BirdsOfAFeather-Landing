import React, { useState, useRef, useEffect } from "react";
import WhatIsThisText from "./WhatIsThisText.js";
import { Whakapapa, WhakapapaText } from "./Whakapapa";

function WhatIsThisAndWhakapapa() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className="relative" id="WhatIsThis">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">What is this?</h1>
            {WhatIsThisText()}
          </div>

          {/* Section content */}
          <div className="md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Our Whakapapa</h3>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                {WhakapapaText.map(({ text }) => (
                  <Whakapapa text={text} />
                ))}
              </div>
              {/* Tabs items */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="zoom-y-out"
                ref={tabs}
              >
                <div className="relative flex flex-col text-center lg:text-right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIsThisAndWhakapapa;
