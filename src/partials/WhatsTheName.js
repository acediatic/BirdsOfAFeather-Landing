import React from "react";

function WhatsTheName() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-teal-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-4 text-white">What's with the name?</h2>
            <p className="text-xl text-white" data-aos="zoom-y-out">
              As the saying goes, “Birds of a feather flock together.” This
              proverb is usually interpreted as the observation that people with
              similar interests or characteristics tend to form groups. In our
              case, Birds of a Feather is a community of people with a similar
              interest that, akin to a flock of birds, look out for each other.
              We like the analogy!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatsTheName;
