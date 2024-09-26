import "./../../../main.css";
import React from "react";
import PropTypes from "prop-types";

/**
 * The SearchInput component
 *
 * This component allows you to search
 */
const SearchInput = ({
  variant,
  value,
  onChange,
  fullWidth,
  size,
  required,
  placeholder,
  disabled,
  inputProps,
  className,
}) => {
  // Getting the style of the wrapper
  const style =
    variant === "outlined" ? `border border-gray-300 bg-white` : "bg-gray-100";
  const inputStyle = variant === "outlined" ? `bg-white` : "bg-gray-100";

  // Getting the width
  // This is eather full width or fit content width
  const width = fullWidth ? "w-full" : "w-fit";

  return (
    <div
      className={`${style} relative flex items-center ${width} ${className}  rounded-md`}
    >
      <input
        {...inputProps}
        type="text"
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        className={`${inputStyle} text-gray5 text-sm focus:outline-none w-full rounded-md ${size} pl-5`}
      />

      {/* The search icon */}

      <span className="px-3 text-gray2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>
    </div>
  );
};

SearchInput.propTypes = {
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
};

SearchInput.defaultProps = {
  size: "small",
  variant: "filled",
  placeholder: "Rechercher...",
  required: false,
  disabled: false,
  labelProps: {},
  inputProps: {},
  error: false,
  helperText: "",
};

export default SearchInput;
