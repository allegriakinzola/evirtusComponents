import "./../../../main.css";
import React from "react";
import PropTypes from "prop-types";

/**
 * The image component
 *
 * ### Usage
 * ```jsx
 * <Image className="w-full" alt="" url={}/>
 * ```
 */
const Image = ({
  url,
  alt,
  width,
  className,
  fullWidth,
  imgProps,
  style,
  minHeight,
  height,
}) => {
  const imageWidth = !width ? (fullWidth ? "w-full" : "") : `w-${width}`;

  return (
    <div
      className={`${imageWidth} ${className} overflow-hidden`}
      style={{ ...style, minHeight, height }}
    >
      {url ? (
        <img
          {...imgProps}
          src={url}
          alt={alt}
          className={`w-full h-auto ${className}`}
        />
      ) : (
        <div className="w-full h-full bg-grayDefault" />
      )}
    </div>
  );
};

Image.propTypes = {
  /**
   * The classname of the wrapping div
   */
  className: PropTypes.string,
  /**
   * The url of the image
   */
  url: PropTypes.string,
  /**
   * alt html attribute of the img html element
   */
  alt: PropTypes.string,
  /**
   * The img html element props
   */
  imgProps: PropTypes.object,
  /**
   * The style of the wrapping div
   */
  style: PropTypes.object,
  /**
   * The min height of the wrapping div
   */
  minHeight: PropTypes.number,
  /**
   * The height of the wrapping div
   */
  height: PropTypes.number,
  /**
   * The width of the wrapping div
   */
  width: PropTypes.oneOf([
    "0",
    "0.5",
    "1",
    "1.5",
    "2",
    "2.5",
    "3",
    "3.5",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "14",
    "16",
    "20",
    "24",
    "28",
    "32",
    "36",
    "40",
    "44",
    "48",
    "52",
    "56",
    "60",
    "64",
    "72",
    "80",
    "96",
    "auto",
    "1/2",
    "1/3",
    "2/3",
    "1/4",
    "2/4",
    "3/4",
    "1/5",
    "2/5",
    "3/5",
    "4/5",
    "1/6",
    "2/6",
    "3/6",
    "4/6",
    "5/6",
    "1/12",
    "2/12",
    "3/12",
    "4/12",
    "5/12",
    "6/12",
    "7/12",
    "8/12",
    "9/12",
    "10/12",
    "11/12",
    "full",
    "screen",
    "min",
    "max",
    "fit",
  ]),
  /**
   * The full width state of the component
   */
  fullWidth: PropTypes.bool,
};

Image.defaultProps = {
  alt: "",
  style: {},
};

export default Image;
