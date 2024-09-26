import React from "react";
import "./../../../main.css";
import PropTypes from "prop-types";

/**
 * The TextArea component
 *
 * The component tha holds all the textarea's variant and functionalities
 */

const TextArea = ({
  variant,
  value,
  onChange,
  style,
  label,
  id,
  name,
  fullWidth,
  size,
  required,
  placeholder,
  disabled,
  inputProps,
  labelProps,
  error,
  helperText,
  className,
}) => {
  // Getting the colors
  const borderColor = error ? "danger" : "gray-300";
  const textColor = error ? "danger" : disabled ? "grayText" : "black";

  // Getting the input style
  const inputStyle = disabled
    ? "text-grayText bg-[#fafafa]"
    : variant === "outlined"
    ? `border border-${borderColor} bg-white`
    : "bg-gray-100 border border-gray-100";

  // Getting the width
  // This is eather full width or fit content width
  const width = fullWidth ? "w-full" : "w-fit";

  return (
    <div className={`relative flex flex-col gap-1 ${width} ${className}`}>
      {label && label !== "" && (
        <label
          className={`text-small text-${textColor} flex items-center gap-1`}
          {...labelProps}
          htmlFor={`${id ? id : ""}`}
        >
          {label}
          {required && <span className="text-secondary">*</span>}
        </label>
      )}

      <textarea
        {...inputProps}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        style={style}
        disabled={disabled}
        id={id ? id : ""}
        className={`${inputStyle} bg-transparent text-${textColor} text-sm focus:outline-none w-full rounded-md ${size} px-5`}
      />
      {error && <span className="text-danger text-xs ml-2">{helperText}</span>}
    </div>
  );
};

TextArea.propTypes = {
  /**
   * The size of the component.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * The variant of the component.
   */
  variant: PropTypes.oneOf(["filled", "outlined"]),
  /**
   * The state of the component width
   */
  fullWidth: PropTypes.bool,
  /**
   * Whether the input is required or not
   */
  required: PropTypes.bool,
  /**
   * The input disabled state
   */
  disabled: PropTypes.bool,
  /**
   * The label of the input
   */
  label: PropTypes.string,
  /**
   * An object containg the other props of the label
   */
  labelProps: PropTypes.object,
  /**
   * The input placeholder
   */
  placeholder: PropTypes.string,
  /**
   * An object containg the other props of the input
   */
  inputProps: PropTypes.object,
  /**
   * The error state
   */
  error: PropTypes.bool,
  /**
   * The helper text
   */
  helperText: PropTypes.string,
  /**
   * The class name of the container div
   */
  className: PropTypes.string,
  /**
   * The value of the input
   */
  value: PropTypes.string,
  /**
   * The input value change handler
   */
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  size: "large",
  variant: "outlined",
  required: false,
  disabled: false,
  labelProps: "{}",
  inputProps: {},
  error: false,
  helperText: "",
};

export default TextArea;
