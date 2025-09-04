import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="bg-white shadow rounded-md p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Dashboard Overview</h3>
              
              <div className="grid-cols-4">
                <div style={{ backgroundColor: '#dbeafe', padding: '1.5rem', borderRadius: '0.5rem' }}>
                  <h4 className="text-sm font-medium" style={{ color: '#1d4ed8' }}>Total Invoices</h4>
                  <p className="text-xl font-bold" style={{ color: '#1e3a8a' }}>0</p>
                </div>
                
                <div style={{ backgroundColor: '#dcfce7', padding: '1.5rem', borderRadius: '0.5rem' }}>
                  <h4 className="text-sm font-medium" style={{ color: '#16a34a' }}>Paid Invoices</h4>
                  <p className="text-xl font-bold" style={{ color: '#14532d' }}>0</p>
                </div>
                
                <div style={{ backgroundColor: '#fef3c7', padding: '1.5rem', borderRadius: '0.5rem' }}>
                  <h4 className="text-sm font-medium" style={{ color: '#d97706' }}>Pending Invoices</h4>
                  <p className="text-xl font-bold" style={{ color: '#92400e' }}>0</p>
                </div>
                
                <div style={{ backgroundColor: '#f3e8ff', padding: '1.5rem', borderRadius: '0.5rem' }}>
                  <h4 className="text-sm font-medium" style={{ color: '#7c3aed' }}>Total Customers</h4>
                  <p className="text-xl font-bold" style={{ color: '#581c87' }}>0</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-md p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
              <p className="text-gray-500">No recent activity to display.</p>
            </div>
          </div>
        );
      case 'staff':
        return (
          <div className="bg-white shadow rounded-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Staff Management</h3>
              <button className="btn-primary">Add New Staff</button>
            </div>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={4} className="text-gray-500">No staff members found. Database connection needed.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'customers':
        return (
          <div className="bg-white shadow rounded-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Customer Management</h3>
              <button className="btn-primary">Add New Customer</button>
            </div>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={4} className="text-gray-500">No customers found. Database connection needed.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'invoices':
        return (
          <div className="bg-white shadow rounded-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Invoice Management</h3>
              <button className="btn-primary">Create New Invoice</button>
            </div>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Invoice #</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Due Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={6} className="text-gray-500">No invoices found. Database connection needed.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex flex-col w-64 bg-white shadow-lg">
        <div className="flex items-center justify-center h-16 bg-indigo-600">
          <h1 className="text-xl font-bold text-white">Invoicing System</h1>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-2">
          {[
            { name: 'Dashboard', key: 'dashboard' },
            { name: 'Staff', key: 'staff' },
            { name: 'Customers', key: 'customers' },
            { name: 'Invoices', key: 'invoices' },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setCurrentPage(item.key)}
              className={`w-full flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 ${
                currentPage === item.key ? 'bg-gray-100' : ''
              }`}
              style={{ justifyContent: 'flex-start' }}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700">Demo User</p>
              <p className="text-sm text-gray-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <h2 className="text-xl font-medium text-gray-800">
              Welcome to Invoicing System
            </h2>
          </div>
        </header>
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;
