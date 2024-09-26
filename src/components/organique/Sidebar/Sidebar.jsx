import "./../../../main.css";
import React from "react";
import PropTypes from "prop-types";

import MenuItem from "../../atoms/MenuItem/MenuItem.jsx";
import Text from "../../atoms/Text/Text.jsx";
import Logo from "../../atoms/Logo/Logo.jsx";
import logo from "./logo-black.png";
import IconButton from "../../atoms/IconButton/IconButton.jsx";

/***
 * The main sidebar component
 *
 * ### Usage
 *
 * ```jsx
 *
 * <Sidebar 
 *  className={""}
 *  linkList={[
    {
      to: "#",
      label: "Accueil",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
      ),
    },
 * ]}
 * />
 * ```
 */

const Sidebar = ({
  className,
  logoUrl,
  linkList,
  linkComponent: Link,
  open,
  onClose,
  children,
}) => {
  // The responsive className

  const year = new Date().getFullYear();
  return (
    <div
      onClick={onClose}
      className={`${className} fixed top-0 left-0 bottom-0 z-50 ${
        open ? "hidden md:block" : " md:flex"
      } w-full bg-backdrop md:w-80`}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="flex flex-col h-full bg-bgDefault border-r border-gray-300 w-80"
      >
        <div
          style={{ height: "110px" }}
          className="hidden md:flex items-center relative"
        >
          {/* The logo */}
          <div className="hidden md:flex items-center gap-2 px-2 pr-4  ">
            {logoUrl ? (
              <Link to="/">
                <Logo url={logoUrl} size="large" />
              </Link>
            ) : (
              <Link to="/">
                <Text fontWeight="bold" type="white">
                  M-RSIT-AGISMAC
                </Text>
              </Link>
            )}
          </div>
        </div>

        <span className="md:hidden block absolute top-2 right-2">
          <IconButton size="small" onClick={onClose}>
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </span>

        <div className="flex-1 px-4 py-2 overflow-y-auto max-h-[92vh] md:max-h-[80vh]">
          {/* Menu list  */}

          {linkList instanceof Array && (
            <ul className="pb-2 space-y-1 text-sm">
              {linkList.map(listItem => (
                <MenuItem
                  {...listItem}
                  label={listItem.label}
                  to={listItem.to}
                  icon={listItem.icon}
                  linkComponent={Link}
                  onClick={onClose}
                />
              ))}
            </ul>
          )}

          {/* Display the other menu */}
          {children ? children : null}
        </div>

        {/* The footer */}

        <div className="flex flex-col gap-2 p-4 border-t border-gray-300">
          <div className="flex text-xs text-gray-500 items-center gap-1 px-2.5">
            © {year} m-rsit-agismac.cd tous droits réservés.
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  /**
   * The className attribute of the container
   */
  className: PropTypes.string,
  /**
   * The list of the links in the menu
   */
  linkList: PropTypes.array,
  /**
   * The link component
   */
  linkComponent: PropTypes.element,
  /**
   * Forces the sidebar open and close
   */
  open: PropTypes.bool,
  /**
   * The function that handles the dropbox click event
   */
  onClose: PropTypes.func,
  /**
   * The children element. Represent the other content that can be displayed under the menu list
   */
  children: PropTypes.element,
};

Sidebar.defaultProps = {
  className: "",
  linkList: [],
  open: false,
  logoUrl: logo,
  onClose: () => {},
  linkComponent: props => {
    return (
      <a
        href={props.to}
        className={
          props?.className ? props?.className({ isActive: false }) : ""
        }
      >
        {props.children}
      </a>
    );
  },
};

export default Sidebar;
