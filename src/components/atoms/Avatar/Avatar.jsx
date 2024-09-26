import React from "react";
import PropTypes from "prop-types";
import "./../../../main.css";
import Image from "../Image/Image.jsx";

const userIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-2/3 h-2/3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
};

const Avatar = ({ children, src, size, className, cube }) => {
  const sizeClass =
    size === "large" ? "w-20 h-20" : size === "small" ? "w-8 h-8" : "w-10 h-10";
  return (
    <div
      className={`${sizeClass} ${
        cube ? "rounded-md" : "rounded-full"
      } bg-gray-100 flex overflow-hidden justify-center items-center border border-gray-200 ${className}`}
      style={{
        background:
          "linear-gradient(315deg, rgb(239 68 68 / 27%) 0%, rgb(255 79 0 / 38%) 13.02%, rgb(234 81 52 / 33%) 25.52%, rgb(243 211 75 / 34%) 37.5%, rgb(243 212 75 / 29%) 50%, rgb(242 204 71 / 20%) 61.98%, rgb(70 170 225 / 28%) 74.48%, rgb(77 179 221 / 22%) 87.5%, rgb(61 160 228 / 21%) 100%)",
        color: "#0000002b",
      }}
    >
      {src ? <Image url={src} /> : children}
    </div>
  );
};

Avatar.propTypes = {
  color: PropTypes.string,
  children: PropTypes.elementType,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Avatar.defaultProps = {
  color: "gray-100",
  children: userIcon(),
  size: "medium",
};

export default Avatar;
