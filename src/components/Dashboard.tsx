import React, { useEffect, useState } from "react";
import { WidthProvider, Responsive, Layout } from "react-grid-layout";
import _ from "lodash";
import { DASHBOARD_LAYOUT } from "@/common/constants/listingconstants";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

interface DashboardProps {
  onLayoutChange: (layout: Layout[], oldItem: Layout, newItem: Layout) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLayoutChange }) => {
  const [items, setItems] = useState<Layout[]>([]);
  useEffect(() => {
    setItems(DASHBOARD_LAYOUT);
  }, []);

  const generateDOM = () => {
    return _.map(_.range(items.length), function(i) {
      return (
        <div key={items[i].i} className="card bg-red-700" data-grid={items[i]}>
          <span className="text">{items[i].i} ok</span>
        </div>
      );
    });
  };

  const onBreakpointChange = (breakpoint: string, cols: number) => {
    // Not sure what this function was doing originally, handle as needed
    console.log(cols, breakpoint);
  };

  const handleLayoutChange = (layout: Layout[], oldItem: Layout, newItem: Layout) => {
    onLayoutChange(layout, oldItem, newItem);
  };

  return (
    <div>
      <ResponsiveReactGridLayout
        onBreakpointChange={onBreakpointChange} // Adjust if needed
        rowHeight={100}
        autoSize={true}
        onDragStop={handleLayoutChange}
        onResizeStop={handleLayoutChange}
        className="layout"
      >
        {generateDOM()}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export default Dashboard;
