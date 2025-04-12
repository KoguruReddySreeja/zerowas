import React from "react";
import StatsCard from "../../components/admin/StatsCard";
import DashboardChart from "../../components/admin/DashboardCharts";
import AlertsCard from "../../components/admin/AlertsCard";
import ShortcutsPanel from "../../components/admin/ShortcutsPanel";

const Dashboard = () => {
  return (
    <div className="p-6 sm:p-8 flex flex-col gap-6 overflow-y-auto h-full bg-gray-50">
      <h1 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard label="Total Food Saved" value="12,450 kg" icon="🥫" color="green" />
        <StatsCard label="People Served" value="6,210+" icon="👥" color="blue" />
        <StatsCard label="CO₂ Prevented" value="1,845 kg" icon="🌱" color="emerald" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardChart type="donations" />
        <DashboardChart type="users" />
      </div>

      {/* Alerts + Shortcuts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AlertsCard />
        <ShortcutsPanel />
      </div>
    </div>
  );
};

export default Dashboard;
