import React from "react";
import "../../../main.css";
import PropTypes from "prop-types";

import Spiner from "../Spiner/Spinner.jsx";

/**
 * The button component
 *
 * The component tha holds all the button's variant and functionalities
 */
const Button = ({
  color,
  variant,
  type,
  onClick,
  size,
  className,
  loading,
  fullWidth,
  children,
  disabled,
  ...other
}) => {
  // Getting the width value
  const wFull = fullWidth ? "w-full" : "";

  // Getting the button display style
  const style =
    variant === "text"
      ? `btn-text-${color}`
      : variant === "outlined"
      ? `btn-outline-${color}`
      : `btn-${color}`;

  return (
    <button
      {...other}
      disabled={disabled}
      className={`${className} ${wFull} btn ${style} ${size} ${
        disabled ? "cursor-not-allowed !bg-gray-100" : ""
      }`}
      type={type}
      onClick={onClick}
      size={size}
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

Button.propTypes = {
  /**
   * The variant of the component
   */
  variant: PropTypes.oneOf(["outlined", "filled", "text"]),
  /**
   * The color of the component
   */
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "primary-light",
    "secondary-light",
    "default",
  ]),
  /**
   * The size of the component
   */
  size: PropTypes.oneOf(["small", "large", "medium"]),
  /**
   * The children of the button
   */
  children: PropTypes.any,
  /**
   * The type of the button
   */
  type: PropTypes.oneOf(["button", "submit"]),
  /**
   * The function that is called when the component is clicked
   */
  onClick: PropTypes.func,
  /**
   * The css classes to be applied to the component
   */
  className: PropTypes.string,
  /**
   * The loading state
   */
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  color: "default",
  size: "medium",
  type: "button",
  onClick: () => {},
  loading: false,
};

export default Button;
