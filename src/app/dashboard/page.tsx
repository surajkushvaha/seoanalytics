"use client";
import Dashboard from "@/components/Dashboard";
import { Layout } from "react-grid-layout";

const DashboardPage = () => {
  function changeHandler(layout: Layout[], oldItem: Layout, newItem: Layout) {
    console.log(oldItem, newItem,layout);

  }
  return <Dashboard onLayoutChange={changeHandler} />;
};
export default DashboardPage;
