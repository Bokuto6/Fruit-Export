import React from 'react';
import { Link } from 'react-router-dom';
import { Apple, Truck, FileText, MessageCircle, LayoutDashboard } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white text-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Apple className="h-8 w-8 mr-2 text-green-500" />
            <span className="font-bold text-xl text-blue-600">FreshFruits Export</span>
          </Link>
          <div className="flex space-x-4">
            <NavLink to="/" icon={<LayoutDashboard className="h-5 w-5" />} text="Home" />
            <NavLink to="/dashboard" icon={<LayoutDashboard className="h-5 w-5" />} text="Dashboard" />
            <NavLink to="/shipments" icon={<Truck className="h-5 w-5" />} text="Shipments" />
            <NavLink to="/documents" icon={<FileText className="h-5 w-5" />} text="Documents" />
            <NavLink to="/communication" icon={<MessageCircle className="h-5 w-5" />} text="Communication" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; icon: React.ReactNode; text: string }> = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center hover:bg-gray-100 px-3 py-2 rounded text-blue-600">
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);

export default Navbar;