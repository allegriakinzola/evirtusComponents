import React from "react";
import "./../../../main.css";
import PropTypes from "prop-types";

/**
 * The TextField component
 *
 * The component tha holds all the textfield's variant and functionalities
 */

const TextField = ({
  type,
  align,
  variant,
  value,
  onChange,
  label,
  id,
  fullWidth,
  size,
  required,
  placeholder,
  disabled,
  inputProps,
  labelProps,
  error,
  helperText,
  style,
  className,
  name,
  suffix,
  prefix,
  inputClassName,
}) => {
  // Getting the colors
  const borderColor = error ? "danger" : "gray-300";
  const textColor = error ? "danger" : disabled ? "grayText" : "black";

  // Getting the input style
  const inputStyle = disabled
    ? "text-grayText bg-slate-50"
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
      <div
        className={`${inputClassName} ${inputStyle} flex items-center w-full rounded-lg overflow-hidden`}
      >
        {prefix && <span className="pl-2">{prefix}</span>}
        <input
          {...inputProps}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          style={style}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          id={id ? id : ""}
          className={`text-${textColor} text-${align} text-sm focus:outline-none w-full rounded-md ${size} !bg-transparent px-4`}
        />
        {suffix && <span className="pr-2">{suffix}</span>}
      </div>
      {error && <span className="text-danger text-xs ml-2">{helperText}</span>}
    </div>
  );
};

TextField.propTypes = {
  /**
   * The size of the component.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * The variant of the component.
   */
  variant: PropTypes.oneOf(["filled", "outlined"]),
  /**
   * The type of the input
   */
  type: PropTypes.oneOf(["text", "tel", "email", "number", "date"]),
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
  align: PropTypes.oneOf(["center", "right", "left"]),
  /**
   * The class name of the container div
   */
  className: PropTypes.string,
  /**
   * The value of the input
   */
  value: PropTypes.any,
  /**
   * The input value change handler
   */
  onChange: PropTypes.func,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
};

TextField.defaultProps = {
  size: "medium",
  align: "left",
  variant: "outlined",
  type: "text",
  labelProps: {},
  inputProps: {},
  error: false,
};

export default TextField;
