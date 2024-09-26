import { useState } from "react";
import Text from "../Text/Text.jsx";
import PropTypes from "prop-types";

const AppMenuItem = ({ label, menuList, navLinkComponent: NavLink }) => {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => setOpen(!open);

  return (
    <div>
      <button onClick={toggleOpen} className="flex items-center gap-2 ">
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <Text fontWeight="semibold" size="small" className="uppercase">
          {label}
        </Text>
      </button>

      {open && (
        <div className="py-4 px-2 space-y-1 ml-3">
          {menuList.map((menu) => (
            <NavLink
              end
              to={menu.path}
              key={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-1 rounded-lg text-gray4 hover:underline hover:text-blue-700 ${
                  isActive ? "bg-activeMenu text-black" : ""
                }`
              }
            >
              {menu.icon}
              <Text className="">{menu.text}</Text>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

AppMenuItem.propTypes = {
  /**
   * The label of the menu.
   */
  label: PropTypes.string,
  /**
   * The react router dom link component
   */
  navLinkComponent: PropTypes.element,
  /**
   * The list of the application menu
   */
  menuList: PropTypes.array,
};

AppMenuItem.defaultProps = {
  label: "Some menu item label",
};

export default AppMenuItem;
