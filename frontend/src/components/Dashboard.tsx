import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Dashboard Overview</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-sm font-medium text-blue-600">Total Invoices</h4>
            <p className="text-2xl font-bold text-blue-900">0</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="text-sm font-medium text-green-600">Paid Invoices</h4>
            <p className="text-2xl font-bold text-green-900">0</p>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h4 className="text-sm font-medium text-yellow-600">Pending Invoices</h4>
            <p className="text-2xl font-bold text-yellow-900">0</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <h4 className="text-sm font-medium text-purple-600">Total Customers</h4>
            <p className="text-2xl font-bold text-purple-900">0</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
        <p className="text-gray-500">No recent activity to display.</p>
      </div>
    </div>
  );
};

export default Dashboard;