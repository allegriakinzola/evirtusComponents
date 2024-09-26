import React from "react";
import PropTypes from "prop-types";
import "./../../../main.css";

const userIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-1/2 h-1/2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
};

const Avatar = ({ children, color, size, className }) => {
  const sizeClass =
    size === "large" ? "w-20 h-20" : size === "small" ? "w-8 h-8" : "w-10 h-10";
  return (
    <div
      className={`${sizeClass} rounded-full bg-${color} flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};

Avatar.propTypes = {
  color: PropTypes.string,
  children: PropTypes.elementType,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Avatar.defaultProps = {
  color: "gray1",
  children: userIcon(),
  size: "medium",
};

export default Avatar;
