import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  HomeIcon,
  UsersIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CogIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const navigation = [
    { name: 'Dashboard', href: '/', icon: HomeIcon },
    { name: 'Staff', href: '/staff', icon: UsersIcon },
    { name: 'Roles', href: '/roles', icon: CogIcon },
    { name: 'Customers', href: '/customers', icon: UserGroupIcon },
    { name: 'Invoices', href: '/invoices', icon: DocumentTextIcon },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex flex-col w-64 bg-white shadow-lg">
        <div className="flex items-center justify-center h-16 bg-indigo-600">
          <h1 className="text-xl font-bold text-white">Invoicing System</h1>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-indigo-600"
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700">{user.username}</p>
              <p className="text-xs text-gray-500">{user.role?.name}</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Welcome to Invoicing System
            </h2>
          </div>
        </header>
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;