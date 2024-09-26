import "./../../../main.css";
import React from "react";
import PropTypes from "prop-types";
import Spiner from "../Spiner/Spinner.jsx";

/**
 * The Icon button component
 * 
 * ### Usage
 * ```jsx
 * <IconButton size="small" color="primary">
 *  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
 *  </svg>
 * </IconButton/>
 * ```
 */
const IconButton = ({
  children,
  size,
  type,
  color,
  variant,
  loading,
  className,
  onClick,
  ...other
}) => {
  // Get the button style
  const styleButton =
    variant === "outlined" ? `btn-outline-${color}` : `btn-${color}`;

  // Get the size by setting the padding value
  const padding =
    size === "smaller"
      ? "1"
      : size === "small"
      ? "2"
      : size === "medium"
      ? "3"
      : "4";

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styleButton} ${className} focus:outline-none font-medium rounded-md text-sm text-center inline-flex items-center p-${padding}`}
      {...other}
    >
      {loading && (
        <Spiner
          color={
            color === "primary" || color === "secondary"
              ? "white"
              : color === "default"
              ? "black"
              : color.replace("-light", "")
          }
          size="small"
        />
      )}
      {children}
    </button>
  );
};

IconButton.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.object.isRequired,
  /**
   * The color of component
   */

  color: PropTypes.oneOf(["default", "primary", "secondary", "danger"]),
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["filled", "outlined"]),
  /**
   * The size of the component.
   */
  size: PropTypes.oneOf(["small", "smaller", "medium", "large"]),
  /**
   * The type of the button.
   */
  type: PropTypes.oneOf(["button", "submit"]),
  /**
   * The loading state
   */
  loading: PropTypes.bool,
};

IconButton.defaultProps = {
  color: "default",
  variant: "filled",
  size: "medium",
  type: "button",

  onClick: () => {},
  loading: false,
};

export default IconButton;
