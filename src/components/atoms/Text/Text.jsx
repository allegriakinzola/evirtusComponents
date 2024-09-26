import "./../../../main.css";
import React from "react";
import PropTypes from "prop-types";


/**
 * Component allowing to manage the text
 *
 * ### Usage
 *
 * ```jsx
 * <Text size="medium" type="primary">
 *  Text content
 * </Text>
 * ```
 */
const Text = ({ children, size, type, fontWeight, className, align, element, textWrap }) => {
  const whiteSpace = textWrap ? "" : "whitespace-nowrap overflow-ellipsis";
  return (
    <>

      {/* Display a paragraph */}

      {element === "p" &&
        <p className={`${className} text-${type} text-${align} text-${size} font-${fontWeight} ${whiteSpace}`}>
          {children}
        </p>
      }

      {/* Display a span */}

      {element === "span" &&
        <span className={`${className} text-${type} text-${align} text-${size} font-${fontWeight} ${whiteSpace}`}>
          {children}
        </span>
      }

      {/* Display a h1 */}

      {element === "h1" &&
        <h1 className={`${className} text-${type} text-${align} text-${size} font-${fontWeight} ${whiteSpace}`}>
          {children}
        </h1>
      }

      {/* Display a h2 */}

      {element === "h2" &&
        <h2 className={`${className} text-${type} text-${align} text-${size} font-${fontWeight} ${whiteSpace}`}>
          {children}
        </h2>
      }

      {/* Display a h3 */}

      {element === "h3" &&
        <h3 className={`${className} text-${type} text-${align} text-${size} font-${fontWeight} ${whiteSpace}`}>
          {children}
        </h3>
      }

      {/* Display a h4 */}

      {element === "h4" &&
        <h4 className={`${className} text-${type} text-${align} text-${size} font-${fontWeight} ${whiteSpace}`}>
          {children}
        </h4>
      }

      {/* Display a h5 */}

      {element === "h5" &&
        <h5 className={`${className} text-${type} text-${align} text-${size} font-${fontWeight} ${whiteSpace}`}>
          {children}
        </h5>
      }

      {/* Display a h6 */}

      {element === "h6" &&
        <h6 className={`${className} text-${type} text-${align} text-${size} font-${fontWeight} ${whiteSpace}`}>
          {children}
        </h6>
      }
    </>
  );
};

Text.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.string.isRequired,
  /**
   * The color of component
   */
  type: PropTypes.oneOf(["default", "primary", "danger", "secondary", "grayDefault", "grayText"]),
  /**
   * alignement of text.
   */
  align: PropTypes.oneOf(["center", "right", "justify", "left"]),
  /**
   * The size of the component.
   */
  size: PropTypes.oneOf(["small", "medium", "large", "xl", "2xl", "3xl", "4xl", "5xl"]),
  /**
   * The size of the component.
   */
  fontWeight: PropTypes.oneOf(["normal", "bold", "semibold"]),
  /**
   * The element that holds the text.
   */
  element: PropTypes.oneOf(["span", "p", "h1", "h2", "h3", "h4", "h5", "h6"]),
};

Text.defaultProps = {
  type: "default",
  size: "medium",
  fontWeight: "normal",
  className: "",
  element: "span",
  textWrap: true,
};

export default Text;
