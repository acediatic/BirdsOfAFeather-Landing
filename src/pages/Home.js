import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import WhatIsThisAndWhakapapa from "../partials/WhatIsThis";
import OurWhy from "../partials/OurWhy";
import WhatsTheName from "../partials/WhatsTheName";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import MemberTypes from "../partials/MemberTypes";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <WhatIsThisAndWhakapapa />
        <WhatsTheName />
        <OurWhy />
        <MemberTypes />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
