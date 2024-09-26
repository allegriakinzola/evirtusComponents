import "./../../../main.css";
import React from "react";
import PropTypes from "prop-types";
import Text from "../Text/Text.jsx";
import { NavLink } from "react-router-dom";

const WithSubMenu = ({ icon, label, subItems }) => {
  const [open, setOpen] = useState(true);

  const toggleOpen = () => setOpen(!open);

  return (
    <li onClick={toggleOpen} className="list-none cursor-pointer">
      <span
        className={`flex items-center gap-3 px-4 py-2 rounded-lg text-gray4 hover:text-gray-200 w-full`}
      >
        <span className="flex w-full items-center gap-2 ">
          {icon}

          <Text className="flex-1" size="medium">
            {label}
          </Text>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-gray-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </span>
      {open && (
        <ul className="ml-10">
          {subItems.map(item => (
            <li className="list-none cursor-pointer">
              <NavLink
                to={item.to}
                onClick={e => e.stopPropagation()}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg  hover:text-gray-200 ${
                    isActive ? "bg-white text-black" : "text-gray-300"
                  }`
                }
              >
                <span className="flex items-center gap-2 ">
                  <Text size="medium">{item.label}</Text>
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

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

const MenuItem = ({ to, icon, label, subItems, ...other }) => {
  const menuStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg text-gray4 hover:text-gray-200 ${
      isActive ? "bg-white text-black" : ""
    }`;

  return subItems ? (
    <WithSubMenu icon={icon} label={label} subItems={subItems} />
  ) : (
    <li {...other} className="list-none cursor-pointer">
      <NavLink to={to} end={other.end} className={menuStyle}>
        <span className="flex items-center gap-2 ">
          {icon}
          <Text size="medium">{label}</Text>
        </span>
      </NavLink>
    </li>
  );
};

MenuItem.defaultProps = {
  to: "",
  label: "Some menu item label",
};

export default MenuItem;
