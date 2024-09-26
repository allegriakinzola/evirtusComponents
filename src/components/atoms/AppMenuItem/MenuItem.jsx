import "./../../../main.css";
import React from "react";
import PropTypes from "prop-types";
import Text from "../Text/Text.jsx";
import { AppMenu } from "./AppMenuItem.jsx";

/**
 * Items of Menu List
 *
 * ### Usage
 * ```jsx
 * <MenuItem 
 *  linkComponent={Link}
 *  to=""
 *  label="Some label"
 *  icon={
 *    (
 *      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg> 
 *    )
 *  }
 * />
 * ```
 */
const MenuItem = ({
  to,
  icon,
  label,
  linkComponent: Link,
  isApp,
  menuList,
  navLinkComponent,
  ...other
}) => {
  return (
    <>
      {isApp ? (
        <AppMenu
          label={label}
          menuList={menuList}
          navLinkComponent={navLinkComponent}
        />
      ) : (
        <li {...other} className="list-none cursor-pointer">
          <Link
            to={to}
            className={({ isActive }) =>
              isActive ? `bg-white overflow-hidden text-black` : "text-gray-300"
            }
          >
            <span className="flex items-center px-2.5 py-3 gap-2 bg-[inherit] rounded-md transition-all hover:bg-white hover:text-gray-700">
              {icon}
              <Text size="medium">{label}</Text>
            </span>
          </Link>
        </li>
      )}
    </>
  );
};

MenuItem.propTypes = {
  /**
   * The label of the menu.
   */
  label: PropTypes.any,
  /**
   * The icon of menu item
   */
  icon: PropTypes.any,
  /**
   * The link url of the link component.
   */
  to: PropTypes.string,
  /**
   * The react router dom link component
   */
  linkComponent: PropTypes.element,
  /**
   * Determine whether the menu is an app menu or a simple menu
   */
  isApp: PropTypes.bool,
  /**
   * The list of the application menu
   */
  menuList: PropTypes.array,
  /**
   * The react-router-dom NavLink component
   */
  navLinkComponent: PropTypes.element,
};

MenuItem.defaultProps = {
  to: "",
  label: "Some menu item label",
  isApp: false,
};

export default MenuItem;
