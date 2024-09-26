import React from "react";
import PropTypes from "prop-types";
import Text from "../../atoms/Text/Text.jsx";

/**
 * The default children component
 */

const DefaultChildren = () => {
  return <Text>The content element of the modal</Text>;
};

/**
 * The modal component
 *
 * @usage
 *
 *  ```jsx
 * const [openModal, setOpenModal] = useState(false)
 *
 * const toggleModal = () => setOpenModal(!openModal)
 *
 * return (
 * <div>
 * <Button onclick={toggleModal}>Click</Button>
 *
 * <Modal
 *  title="The title of the content"
 *  open={openModal}
 *  onClose={toggleModal}
 * >
 *  <div>
 * <p>The content of the modal</p>
 *  <div>
 * </Button>
 *  </div>
 * )
 * ```
 */
const SmallModal = ({
  open,
  children,
  title,
  onClose,
  contentContainerClassName,
  className,
  position,
  stickOnSide,
  smaller,
}) => {
  const state = open ? "" : "hidden";
  const postitionChild =
    position === "top"
      ? "items-start justify-center md:pt-10"
      : position === "right"
      ? "items-top justify-end"
      : position === "left"
      ? "items-top justify-start"
      : "items-center justify-center";

  return (
    <div
      id="small-modal"
      tabIndex="-1"
      className={`${state} bg-backdrop overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full`}
    >
      <div
        className={`relative sm:${
          stickOnSide ? "" : "p-2"
        } w-full h-full flex ${postitionChild} ${className}`}
      >
        <div
          className={`relative bg-white ${
            smaller ? "max-w-sm" : "max-w-lg"
          } sm:${stickOnSide && position === "left" ? "" : "rounded-l-lg"} sm:${
            stickOnSide && position === "right" ? "" : "rounded-r-lg"
          } shadow w-full ${contentContainerClassName}`}
        >
          <div className="flex justify-between items-center px-5 py-3 rounded-t border-b border-gray1">
            <Text size={"medium"} type="primary" fontWeight={"bold"}>
              {title}
            </Text>
            <button
              onClick={onClose}
              type="button"
              className="text-gray4 bg-transparent hover:bg-gray1 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

SmallModal.propTypes = {
  /**
   * The open modal state
   */
  open: PropTypes.bool,
  /**
   * The title of the modal content
   */
  title: PropTypes.string,
  /**
   * The content of the modal
   */
  children: PropTypes.element,
  /**
   * The close function
   */
  onClose: PropTypes.func.isRequired,
  /**
   * The close function
   */
  position: PropTypes.oneOf(["top", "center", "left", "right"]),
};

SmallModal.defaultProps = {
  open: false,
  title: "Modal title",
  children: <DefaultChildren />,
  position: "center",
};

export default SmallModal;
