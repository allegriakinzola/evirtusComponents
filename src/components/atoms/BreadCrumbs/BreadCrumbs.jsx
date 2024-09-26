import React from "react";
import PropTypes from "prop-types";
import "./../../../main.css";

/**
 * This component is used to display the BreadCrumbs
 *
 * 
 * ### Usage
 * ```jsx
 * <BreadCrumbs
 *  color="default"
 *  list=[
    {
      id: 1,
      label: "Main page",
      link: "/"
    },
    {
      id: 2,
      label: "Second page",
      link: "/"
    },
    {
      id: 3,
      label: "Third page",
      link: "/"
    },
  ]
 * />
 * ```
 */
const BreadCrumbs = ({
  className,
  style,
  color,
  list
}) => {
  return (
    <div className={`bg-white overflow-hidden ${className}`} style={style}>

      <nav className="flex" aria-label="Breadcrumb">

        <ol className="inline-flex items-center space-x-1 md:space-x-3">

          {list.map((item, index) => (
            <li key={item.id} className={`inline-flex items-center gap-2 ${item.id === 1 ? "text-" + color : "text-grayText"} cursor-pointer`}>
              <a
                href={item.link}
                className="inline-flex items-center text-sm"
              >
                <span className={`${item.id === 1 ? "font-semibold" : ""}`}>
                  {item.label}
                </span>
              </a>

              {/* 
              
                The icon

                Displayed only if the index is not the last one
              
              */}

              {index < list.length - 1 &&
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              }
            </li>
          ))}

        </ol>

      </nav>

    </div>
  );
};

BreadCrumbs.propTypes = {
  /**
   * The className of the wrapper div element.
   */
  className: PropTypes.string,
  /**
   * The color of the breadcrum
   */
  color: PropTypes.oneOf(["default", "primary", "secondary", "danger"]),
  /**
   * The css style of the wrapping div
   */
  style: PropTypes.any,
  /**
   * The list of crumb elements
   */
  list: PropTypes.arrayOf(PropTypes.object)
};

BreadCrumbs.defaultProps = {
  color: "default",
}

export default BreadCrumbs;
