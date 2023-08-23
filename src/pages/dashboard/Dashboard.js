import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import DashBoardCard from "../../components/Card/DashBoardCard";

export const Dashboard = () => {
  return (
    <UserLayout title="Dashboard">
      <div className="card">
        <DashBoardCard />
      </div>
    </UserLayout>
  );
};

export default Dashboard;
