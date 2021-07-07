import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhyBox = (props) => {
  const { header, text, icon } = props;

  return (
    <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl md: h-full lg: h-full">
      <div className="bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
        <FontAwesomeIcon
          icon={icon}
          size="3x"
          className="mb-3"
          color="#3B82F6"
        />
      </div>
      <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
        {header}
      </h4>
      <p className="text-gray-600 text-center">{text}</p>
    </div>
  );
};

export default WhyBox;
