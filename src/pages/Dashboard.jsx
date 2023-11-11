import React from "react";
import Content from "../components/Content";

const Dashboard = () => {
  const dashboardpage = {
    heading: "This is Dashboard Page",
  };
  return (
    <div>
      <Content heading={dashboardpage.heading} />
    </div>
  );
};

export default Dashboard;
