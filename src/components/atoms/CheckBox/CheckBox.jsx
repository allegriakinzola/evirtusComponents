import React from 'react';
import "./../../../main.css";
import PropTypes from 'prop-types';


/**
 * The checkBox component, uses an input type checkbox and a label html element
 */
const Checkbox = ({
    name,
    label,
    value,
    onChange,
    checked,
    fullWidth,
    required,
    disabled,
    labelProps,
    inputProps,
    id,
    size,
    error,
    className
}) => {

    const { labelClassName, ...otherLabelProps } = labelProps;
    const width = fullWidth ? "w-full" : "w-fit";
    const textColor = error ? 'danger' : 'gray5';

    const { inputClassName, ...otherInputProps } = inputProps;

    return (

        <div className={`flex items-center ${width} ${className}`}>

            <input
                type={"checkbox"}
                name={name}
                onChange={onChange}
                value={value}
                checked={checked}
                id={id ? id : "input-radio"}
                required={required}
                disabled={disabled}
                className={`${inputClassName} peer w-3 h-3 text-${textColor} bg-gray1 text-${size}`}
                {...otherInputProps}
            />

            <label
                htmlFor={id ? id : "input-radio"}
                className={`pl-2 text-${textColor} cursor-pointer text-${size} peer-disabled:text-gray2 ${labelClassName}`}
                {...otherLabelProps}
            >
                {label}
            </label>

        </div>

    )
}

Checkbox.propTypes = {/**
     * The size of the component.
     */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /**
    * The name of the input
    */
    name: PropTypes.string,
    /**
     * The label of the input
     */
    label: PropTypes.string,
    /**
     * The value of the input element
     */
    value: PropTypes.any,
    /**
     * The function to be called when the input value changes
     */
    onChange: PropTypes.func,
    /**
     * The state of the radio button
     */
    checked: PropTypes.bool,
    /**
     * The disabled state of the input
     */
    disabled: PropTypes.bool,
    /**
     * The required state of the input
     */
    required: PropTypes.bool,
    /**
     * The state of the component width
     */
    fullWidth: PropTypes.bool,
    /**
     * The object containing other input props
     */

    inputProps: PropTypes.object,
    /**
     * The object containing other label props
     */
    labelProps: PropTypes.object,
    /**
     * The error state
     */
    error: PropTypes.bool,
    /**
     * The class name of the container div
     */
    className: PropTypes.string
}

Checkbox.defaultProps = {
    name: "",
    label: "",
    labelProps: {},
    inputProps: {},
    error: false,
    size: 'medium',
    checked: false,
    disabled: false,
    required: false,
    fullWidth: false,
    className: "",
    onChange: () => { }
}


export default Checkbox;