import React from "react";

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            Template by{" "}
            <a
              className="text-blue-600 hover:underline"
              href="https://cruip.com/"
              target="_blank"
              rel="noreferrer"
            >
              Cruip
            </a>
            . Made by{" "}
            <a
              className="text-blue-600 hover:underline"
              href="https://github.com/acediatic"
              target="_blank"
              rel="noreferrer"
            >
              Adam Sinclair
            </a>
          </div>
          <div className="text-sm text-gray-600 mr-4">
            People Vectors created by{" "}
            <a
              className="text-blue-600 hover:underline"
              href="https://www.freepik.com/vectors/people"
              target="_blank"
              rel="noreferrer"
            >
              pikisuperstar.
            </a>
          </div>
          <div className="text-sm text-gray-600 mr-4">
            <a
              className="text-blue-600 hover:underline"
              href="mailto:asin473@aucklanduni.ac.nz"
              target="_blank"
              rel="noreferrer"
            >
              Contact us.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
