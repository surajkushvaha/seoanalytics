"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PROFILE_CONSTANTS } from "@/common/constants/listingconstants";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Button } from "primereact/button";
import { useState } from "react";
library.add(fas, far, fab);

interface props {
  menuClickHandler: Function;
}
const Navbar: React.FC<props> = ({ menuClickHandler }) => {
  const profileIconClickHandler = () => {
    const menu = document.getElementById("menu-profile");
    if (menu?.classList.contains("hidden")) {
      menu?.classList.remove("hidden");
    } else {
      menu?.classList.add("hidden");
    }
  };
  const [sidebar, setSidebar] = useState(false);
  const menuHandler = () => {
    menuClickHandler(sidebar);
    setSidebar(!sidebar);
  };

  return (
    <nav className="row-span-1 bg-white">
      <div className="px-2 sm:px-6 lg:px-8 relative flex h-16 items-center justify-between">
        <Button onClick={menuHandler}>
          <FontAwesomeIcon icon={["fas", "bars"]} />
        </Button>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="relative rounded-[50%] w-[30px] h-[30px] bg-[#1f1f70] p-1 text-[#cce4ff] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <FontAwesomeIcon icon={["fas", "bell"]} />
          </button>

          <div className="relative ml-3 ">
            <div>
              <Button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                onClick={profileIconClickHandler}
              >
                <Image
                  width={100}
                  height={100}
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </Button>
            </div>

            <div
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden"
              role="menu"
              id="menu-profile"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex={-1}
            >
              {PROFILE_CONSTANTS.map((item, index) => (
                <Link
                  onClick={
                    item.callback ? item.callback : profileIconClickHandler
                  }
                  href={item.path ? item.path : "#"}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#cce4ff]"
                  role="menuitem"
                  tabIndex={-1}
                  id={`user-menu-item-${index}`}
                  key={index}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
