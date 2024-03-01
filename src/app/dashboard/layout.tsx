"use client";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function DasboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState]: any = useState();
  const clickHandler: any = (data: boolean) => {
    setState(data);
  };
  const navbarProps = {
    menuClickHandler: clickHandler,
  };
  const sidebarProps = {
    state,
  };
  return (
    <div className="flex h-screen">
      <Sidebar {...sidebarProps} />
      <div className="flex-1 ">
        <div className="flex flex-col h-screen border-l-4 border-l-[#1f1f70]">
          <Navbar {...navbarProps} />
          <div className="row-span-11 flex-1 rounded-[10px] bg-[#ccf4ff]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
