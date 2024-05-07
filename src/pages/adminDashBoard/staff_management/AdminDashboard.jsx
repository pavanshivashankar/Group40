import React from "react";
import Admin_Dash_Nav from "../../../components/adminDashboard/Admin_Dash_Nav";
import RoleStrength from "../../../components/adminVisual/RoleStrength";
import RevenueTracking from "../../../components/adminVisual/RevenueTracking";
import StaffScheduling from "../../../components/adminVisual/StaffScheduling";
import UpcomingEvents from "../../../components/adminVisual/UpcomingEvents";
import VisitorStatistics from "../../../components/adminVisual/VisitorStatistics";
import AttendanceChart from "../../../components/adminVisual/AttendanceChart";

function AdminDashboard() {
  return (
    <>
      <div className="gridApply">
        <Admin_Dash_Nav />
        <section className="mt-lg-0 mt-5">
          <h1 className="mt-lg-0 mt-4">admin dashboard</h1>
          <div className="d-flex justify-content-around flex-wrap">
            <AttendanceChart />
            <RoleStrength />
            <RevenueTracking />
            <UpcomingEvents />
            {/* <StaffScheduling />
            <VisitorStatistics /> */}
          </div>
        </section>
      </div>
    </>
  );
}

export default AdminDashboard;
