import React from "react";
import PropTypes from "prop-types";

import Image from "../Image/Image.jsx";

const Logo = ({ url, size, className, width, height }) => {
  // Getting the width of the image
  const ImageWidth =
    size === "smaller"
      ? 8
      : size === "small"
      ? 14
      : size === "large"
      ? 50
      : width
      ? width
      : 64;
  const ImageHight =
    size === "smaller"
      ? "auto"
      : size === "small"
      ? "auto"
      : size === "large"
      ? "auto"
      : height
      ? height
      : "auto";

  return (
    <Image
      url={url}
      alt="logo agismac"
      width={ImageWidth}
      height={ImageHight}
      className={className}
    />
  );
};

export default Logo;

Logo.propTypes = {
  /**
   * The url of the logo
   */
  url: PropTypes.string,
  /**
   * The size of the logo
   */
  size: PropTypes.oneOf(["smaller", "small", "medium", "large"]),
  /**
   * The className of the logo
   */
  className: PropTypes.string,
  /**
   * The width of the logo image
   */
  width: PropTypes.string,
  /**
   * The height of the logo image
   */
  hieght: PropTypes.string,
};

Logo.defaultProps = {
  size: "medium",
  className: "",
  url: "/logo.svg",
};
