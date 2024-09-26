import React from "react";
import PropTypes from "prop-types";
import "../../../main.css";

import Text from "../Text/Text.jsx";

/**
 * This component is used to display the alert message
 *
 * ### Usage
 *
 * ```jsx
 *
 * <Alert className={""} fullWidth type={"infos"}>
 *   Some alert message ...
 * <Alert/>
 * ```
 */

const Alert = ({ message, type, fullWidth, className, children }) => {
  const width = fullWidth ? "w-full" : "w-fit";
  return (
    <div className={`p-2 bg-${type}Light rounded-md ${width} ${className}`}>
      {children ? (
        children
      ) : (
        <>
          <Text type={type} size="small">
            {message}
          </Text>
        </>
      )}
    </div>
  );
};

Alert.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.element,
  /**
   * The color of component
   */
  type: PropTypes.oneOf(["default", "primary", "secondary", "danger"]),
  /**
   * The size of the component.
   */
  fullWidth: PropTypes.bool,
  /**
   * The title of th alert
   */
  message: PropTypes.string,
  /**
   * The className of the alert
   */
  className: PropTypes.string,
};

Alert.defaultProps = {
  type: "default",
};

export default Alert;
