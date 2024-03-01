"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SIDEBAR_CONSTANT } from "@/common/constants/listingconstants";
import { useEffect, useRef, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

interface props {
  state: boolean;
}
const Sidebar: React.FC<props> = ({ state }) => {
  const menuRef = useRef(null);

  const sidebarHandler = (state: boolean) => {
    document.querySelectorAll(".sidebar-label").forEach((item) => {
      state ? item.classList.remove("hidden") : item.classList.add("hidden");
    });
  };

  useEffect(() => sidebarHandler(state), [state]);

  return (
    <div id="sidebar" className="max-w-64 relative rounded" ref={menuRef}>
      <div className="flex flex-col items-center   h-full overflow-hidden text-[#1f1f70] bg-white">
        <Link className="flex items-center w-full px-3 mt-3" href="#">
          <svg
            className="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
          <span className="ml-2 min-w-40 text-sm font-bold sidebar-label">
            The App
          </span>
        </Link>

        <div className="w-full px-2">
          <div className="flex flex-col items-center w-full mt-3 ">
            {SIDEBAR_CONSTANT.map((item, index) => (
              <Link
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#cce4ff] "
                href={item.path}
                key={index}
              >
                <FontAwesomeIcon
                  className="w-6 h-6 stroke-current"
                  icon={item.icon}
                />
                <span className="ml-2 text-sm min-w-40 font-medium  sidebar-label">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <Link
          className="flex items-center justify-center w-full h-16 mt-auto  hover:bg-[#cce4ff] "
          href="#"
        >
          <FontAwesomeIcon
            className="w-6 h-6 stroke-current"
            icon={["fas", "user"]}
          />
          <span className="ml-2 text-sm  font-medium sidebar-label">
            Account
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
