import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button.jsx";
import ReactDOM from "react-dom";

const IconExemple = () => {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const useClickAway = (ref, cb) => {
  React.useEffect(() => {
    const action = evt => {
      if (ref.current && !ref.current.contains(evt.target)) {
        if (typeof cb === "function") {
          cb();
        }
      }
    };

    document.addEventListener("mousedown", action);

    return () => {
      document.removeEventListener("mousedown", action);
    };
  }, [ref]);
};

const Popper = ({ container, children, togglerClass, position, className }) => {
  return ReactDOM.createPortal(
    <div
      id="dropdown-states"
      className={`${togglerClass} w-fit z-10 rounded-lg shadow-lg border border-gray-300 absolute top-[3rem] ${className} ${position}`}
    >
      {children}
    </div>,
    container
  );
};

const ClickAway = ({
  children,
  triggerComponent: TriggerComponent,
  triggerVariant,
  triggerType,
  triggerSize,
  isLoading,
  otherTriggerProps,
  triggerIcon,
  triggerLabel,
  containerClassName,
  fullWidth,
  position,
  portalContainer,
  popoverClassName,
  triggerTextColor,
  triggerClassName,
  getListContent,
}) => {
  const [open, setOpen] = React.useState(false);
  const [coords, setCoords] = React.useState({});
  const togglerClass = open ? "flex" : "hidden";
  const containerRef = React.useRef();
  useClickAway(containerRef, () => setOpen(false));

  const toggleOptions = e => {
    const rect = e.target.getBoundingClientRect();
    setCoords({
      left: rect.x + rect.width / 2,
      top: rect.y + window.scrollY,
    });
    setOpen(!open);
  };

  const width = fullWidth ? "w-full" : "";
  const pos =
    position === "left"
      ? `left-${coords.left}`
      : position === "right"
      ? `right-0`
      : "";

  return (
    <div
      ref={containerRef}
      className={`${containerClassName} ${width} relative`}
    >
      {TriggerComponent && (
        <TriggerComponent {...otherTriggerProps} onClick={toggleOptions} />
      )}
      {!TriggerComponent && (
        <Button
          {...otherTriggerProps}
          id="states-button"
          data-dropdown-toggle="dropdown-states"
          type={triggerType}
          variant={triggerVariant}
          onclick={toggleOptions}
          size={triggerSize}
          className={`flex items-center gap-3 ${triggerTextColor} ${triggerClassName}`}
          isLoading={isLoading}
          fullWidth={fullWidth}
        >
          {triggerIcon}
          {triggerLabel}
        </Button>
      )}
      {open && (
        <Popper
          className={popoverClassName}
          position={pos}
          container={portalContainer || containerRef.current}
          togglerClass={togglerClass}
        >
          {getListContent ? getListContent(() => setOpen(false)) : children}
        </Popper>
      )}
    </div>
  );
};

ClickAway.propTypes = {
  /**
   * The content of the component.
   */
  triggerIcon: PropTypes.any,
  /**
   * The color of component
   */
  triggerType: PropTypes.oneOf([
    "default",
    "primary",
    "info",
    "danger",
    "success",
  ]),
  /**
   * The variant to use.
   */
  triggerVariant: PropTypes.oneOf(["filled", "outlined", "text"]),
  /**
   * The size of the component.
   */
  triggerSize: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * The className of the container div
   */
  containerClassName: PropTypes.string,
  /**
   * The popup content element
   */
  children: PropTypes.element,
  /**
   * The width state of the component
   */
  fullWidth: PropTypes.bool,
  /**
   * The position of the dropdown
   */
  position: PropTypes.oneOf(["left", "right", "center"]),
};

ClickAway.defaultProps = {
  triggerType: "primary",
  triggerIcon: IconExemple(),
  triggerVariant: "filled",
  triggerSize: "medium",
  position: "left",
};

export default ClickAway;
