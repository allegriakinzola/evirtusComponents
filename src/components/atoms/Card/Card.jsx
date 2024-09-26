import React from "react";
import "./../../../main.css";
import PropTypes from "prop-types";

/**
 * Default Card
 *
 * ### Usage
 * ```jsx
 * <DefaultCard>
 *  <div className="px-4 py-3">
 *      Some content
 *  </div>
 * <DefaultCard/>
 * ```
 */
const Card = ({ children, className, style, shadow = true }) => {
  let sh = shadow ? "shadow-md" : "";

  return (
    <div
      className={`bg-white overflow-hidden ${className} rounded-md ${sh} border border-gray-200`}
      style={style}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.any,
  /**
   * The style of the wrapper div element
   */
  style: PropTypes.any,
  /**
   * The className of the wrapper div element
   */
  className: PropTypes.string,
  shadow: PropTypes.bool,
};

export default Card;
