import React from 'react';
import { BarChart, Truck, FileText, AlertCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Active Shipments"
          value="12"
          icon={<Truck className="h-8 w-8 text-blue-500" />}
        />
        <DashboardCard
          title="Pending Documents"
          value="5"
          icon={<FileText className="h-8 w-8 text-yellow-500" />}
        />
        <DashboardCard
          title="Revenue This Month"
          value="$45,678"
          icon={<BarChart className="h-8 w-8 text-green-500" />}
        />
        <DashboardCard
          title="Open Queries"
          value="3"
          icon={<AlertCircle className="h-8 w-8 text-red-500" />}
        />
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      {icon}
    </div>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);

export default Dashboard;