import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import WhatIsThisAndWhakapapa from "../partials/WhatIsThisAndWhakapapa";
import OurWhy from "../partials/OurWhy";
import WhatsTheName from "../partials/WhatsTheName";
import Register from "../partials/Register";
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
        <Register />
        <WhatIsThisAndWhakapapa />
        <WhatsTheName />
        <OurWhy />
        <MemberTypes />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
