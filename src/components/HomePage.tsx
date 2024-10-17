import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, FileText, MessageCircle, BarChart } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-96 rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Exotic fruits"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-green-500/80 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Bringing Nature's Best to Your Doorstep</h1>
            <p className="text-xl mb-8">Streamlined export solutions for Indian SMBs</p>
            <Link
              to="/dashboard"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
            >
              Start Shipping
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Truck className="h-12 w-12 text-blue-500" />}
            title="Efficient Shipping"
            description="Streamlined logistics and carrier negotiations for timely deliveries."
          />
          <ServiceCard
            icon={<FileText className="h-12 w-12 text-green-500" />}
            title="Document Management"
            description="Seamless handling of all export documentation and compliance."
          />
          <ServiceCard
            icon={<MessageCircle className="h-12 w-12 text-yellow-500" />}
            title="Real-time Communication"
            description="Instant updates and query resolution for all stakeholders."
          />
          <ServiceCard
            icon={<BarChart className="h-12 w-12 text-purple-500" />}
            title="Analytics & Insights"
            description="Data-driven decisions to optimize your export operations."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Global Presence?</h2>
        <p className="text-xl mb-8">Join FreshFruits Ltd. and revolutionize your export process today!</p>
        <Link
          to="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

export default HomePage;