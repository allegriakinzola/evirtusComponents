import React from "react";
import PropTypes from "prop-types";
import Logo from "../../atoms/Logo/Logo.jsx";
import Text from "../../atoms/Text/Text.jsx";

import logo from "./logo-black.png";
import Button from "../../atoms/Button/Button.jsx";
import IconButton from "../../atoms/IconButton/IconButton.jsx";
import UserPopup from "./UserPopup.jsx";

export default function Navbar({
  logoUrl,
  linkComponent: Link,
  search,
  user,
  onDeconnect,
  openSidebar,
  toggleSidebar,
  deconnecting,
  children,
  profileUrl,
  settingUrl,
  clickAwayComponent,
  isFixed,
  className,
}) {
  return (
    <div>
      <nav
        style={{ height: 110 }}
        className={`py-2 z-40 ${
          isFixed ? "fixed" : ""
        } top-0 right-0 bg-white border-b border-gray-300 w-full flex gap-3 items-center justify-between ${className}`}
      >
        {/* The logo */}
        <div className="flex items-center gap-2 px-2 pr-4 md:w-80">
          {logoUrl ? (
            <Link to="/">
              <Logo url={logoUrl} size="medium" />
            </Link>
          ) : (
            <Link to="/">
              <Text size="large" fontWeight="bold" type="primary">
                M-RSIT-AGISMAC
              </Text>
            </Link>
          )}
        </div>

        {children ? (
          children
        ) : (
          <>
            <div className="hidden items-center gap-3 flex-1 justify-end px-4 md:flex">
              {search && (
                <Button
                  variant="outlined"
                  size="small"
                  fullWidth
                  className={
                    "max-w-md flex items-center justify-between gap-2 text-gray-400"
                  }
                >
                  Rechercher...
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              )}

              {/* User popup */}
              {user ? (
                <div className="flex items-center gap-1">
                  <Text size="small" fontWeight="semibold" type="gray-600">
                    {user.name}
                  </Text>
                  <UserPopup
                    user={user}
                    linkComponent={Link}
                    profileUrl={profileUrl}
                    settingUrl={settingUrl}
                    clickAwayComponent={clickAwayComponent}
                    onDeconnect={onDeconnect}
                    deconnecting={deconnecting}
                  />
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <a href="/login" className="inline-block">
                    <Button color="primary">Se connecter</Button>
                  </a>
                </div>
              )}
            </div>

            {/* Responsive part */}
            <div className="flex md:hidden pr-4">
              <IconButton
                size="small"
                variant="outlined"
                onClick={toggleSidebar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </IconButton>
            </div>
          </>
        )}
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  logoUrl: PropTypes.string,
  search: PropTypes.bool,
  user: PropTypes.object,
  deconnect: PropTypes.bool,
  isFixed: PropTypes.bool,
  linkComponent: PropTypes.any,
};

Navbar.defaultProps = {
  logoUrl: logo,
  search: true,
  deconnect: false,
  isFixed: true,
  linkComponent: props => {
    return (
      <a href={props.to} className={props?.className}>
        {props.children}
      </a>
    );
  },
};
