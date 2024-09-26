import React from "react";
import Avatar from "../../atoms/Avatar/Avatar.jsx";
import Button from "../../atoms/Button/Button.jsx";
import ClickAwayLocal from "../../atoms/ClickAway/ClickAway.jsx";
import Text from "../../atoms/Text/Text.jsx";

const UserAvatarDataDisplay = ({ user, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer flex items-center gap-3">
      <Avatar cube src={user?.profileUrl} size="small" />
    </div>
  );
};

export default function UserPopup({
  user,
  profileUrl,
  settingUrl,
  deconnecting,
  onDeconnect,
  linkComponent: Link,
  clickAwayComponent,
}) {
  const ClickAway = clickAwayComponent || ClickAwayLocal;

  return (
    <div className="relative">
      <ClickAway
        triggerSize="small"
        triggerComponent={UserAvatarDataDisplay}
        otherTriggerProps={{ user }}
        position="right"
        popoverClassName="bg-gray1"
      >
        <div className="md:w-[300px] flex flex-col">
          <div className="flex flex-col bg-white rounded-lg">
            <div className="flex items-center gap-4 p-4">
              <Avatar cube src={user?.profileUrl} />

              <div className="flex flex-col text-gray-500">
                <Text size="small" fontWeight="bold">
                  {user?.fullname}
                </Text>
                <Text size="small" type="gray3">
                  {user?.username}
                </Text>
                <Text size="small" type="gray3">
                  {user?.email}
                </Text>
              </div>
            </div>

            <div className="my-4">
              <div className="border-y border-gray-200 py-3">
                <ul>
                  {/* <li className="flex items-center gap-2 text-gray-500">
                    <Link
                      to={profileUrl}
                      className="flex items-center gap-2 text-small text-gray-500 px-3 py-2 w-full cursor-pointer hover:bg-gray-200"
                    >
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
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                      Profile
                    </Link>
                  </li> */}
                  <li className="flex items-center gap-2 text-gray-500">
                    <Link
                      to={settingUrl}
                      className="flex items-center gap-2 text-small text-gray-500 px-3 py-2 w-full cursor-pointer hover:bg-gray-200"
                    >
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
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                      Profil utilisateur
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center pb-2">
              <Button
                className="flex items-center justify-start gap-3 rounded-none"
                size="small"
                fullWidth
                variant="text"
                color="default"
                onClick={onDeconnect}
                loading={deconnecting}
              >
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
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
                Deconnecter votre compte
              </Button>
            </div>
          </div>
        </div>
      </ClickAway>
    </div>
  );
}
