import React, { useState } from "react";
import Background from "../images/FlyingBirds.png";
import swal from "sweetalert";
const axios = require("axios");

function Register() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = () => {
    // remove leading/trailing whitespace
    let cleanFirstName = firstName.trim();
    let cleanLastName = lastName.trim();
    let cleanEmail = email.trim();

    const cleanedUserDetails = { cleanFirstName, cleanLastName, cleanEmail };
    const submissionResult = formValidation(cleanedUserDetails);

    // submit data to Pipedream.
    if (submissionResult.isValid) {
      axios({
        method: "post",
        url: "https://enosma80mufp0jp.m.pipedream.net",
        data: {
          cleanedUserDetails,
        },
      });
      swal({
        title: "Details Submitted!",
        text: "Tēnā koe! Cheers! Thanks for your interest! We'll be in touch.",
        icon: "success",
        button: "Aww yiss!",
      });
    } else {
      swal({
        title: "Uh Oh!",
        text: `Looks like there's something wrong with your ${submissionResult.invalidMsgStr}! Please double check and try again!`,
        icon: "error",
        button: "Here we go again!",
      });
    }
    setHasSubmitted(submissionResult.isValid);
  };

  const formValidation = (userDetails) => {
    const { cleanFirstName, cleanLastName, cleanEmail } = userDetails;
    const invalidMsg = [];

    const namesRegex = new RegExp("\\w+");
    const isValidFirstName = namesRegex.test(cleanFirstName);
    const isValidLastName = namesRegex.test(cleanLastName);

    // matches in format llllddd@aucklanduni.ac.nz where l = letter and d = digit
    const emailRegex = new RegExp(`[A-Za-z]{4}\\d{3}@aucklanduni\\.ac\\.nz`);
    const isValidUoAEmail = emailRegex.test(cleanEmail);

    if (!isValidFirstName) {
      invalidMsg.push("first name");
    }

    if (!isValidLastName) {
      invalidMsg.push("last name");
    }

    if (!isValidUoAEmail) {
      invalidMsg.push("UoA email");
    }

    const invalidMsgStr = invalidMsg.join(", ");

    return { isValid: invalidMsgStr.length === 0, invalidMsgStr };
  };

  return (
    <section id="register">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20 ">
          {/* CTA box */}
          <div
            className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            id="register-internal"
          >
            {/* Background illustration */}
            <div
              className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
              aria-hidden="true"
            >
              <img className="object-cover" src={Background} alt="background" />
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Sound Good?</h3>
                <p className="text-white text-lg mb-6">
                  Register your interest
                </p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-between max-w-xs mx-auto mb-2 sm:max-w-md lg:mx-0 ">
                    <input
                      type="text"
                      className="w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                      placeholder="Your first name..."
                      aria-label="Your first name..."
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      className="w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 text-white placeholder-gray-500"
                      placeholder="Your last name..."
                      aria-label="Your last name..."
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto  sm:max-w-md lg:mx-0">
                    <input
                      type="email"
                      className="w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                      placeholder="Your UoA email…"
                      aria-label="Your email…"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      pattern="[A-Za-z]{4}\d{3}@aucklanduni.ac.nz"
                      title="YourUPI@aucklanduni.ac.nz"
                    />
                    {!hasSubmitted ? (
                      <button
                        className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                        type="submit"
                        onClick={(e) => {
                          // TODO
                          e.preventDefault();
                          submitForm();
                        }}
                      >
                        Submit
                      </button> /* Success message */
                    ) : (
                      <p
                        style={{
                          visibility: hasSubmitted ? "visible" : "hidden",
                        }}
                        className="text-sm text-white mt-3"
                      >
                        Thanks for signing up!
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
