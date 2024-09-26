import "./../../../main.css";
import React from "react";
import PropTypes from "prop-types";
import Text from "../../atoms/Text/Text";

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

const MenuItem = ({ to, icon, label, linkComponent: Link, ...other }) => {
  const menuStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-1 rounded-lg text-gray4 hover:underline hover:text-blue-700 ${
      isActive ? "bg-activeMenu text-black" : ""
    }`;

  return (
    <li {...other} className="list-none cursor-pointer">
      <Link to={to} className={menuStyle}>
        <span className="flex items-center gap-2 ">
          {icon}
          <Text size="medium">{label}</Text>
        </span>
      </Link>
    </li>
  );
};

MenuItem.propTypes = {
  label: PropTypes.any,
  icon: PropTypes.any,
  to: PropTypes.string,
  linkComponent: PropTypes.element,
};

MenuItem.defaultProps = {
  to: "",
  label: "Some menu item label",
};

export default MenuItem;
