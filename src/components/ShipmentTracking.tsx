import React from 'react';
import { Truck, Package, CheckCircle } from 'lucide-react';
import ShipmentMap from './ShipmentMap';

const ShipmentTracking: React.FC = () => {
  const shipments = [
    { id: 'SH001', destination: 'New York, USA', status: 'In Transit', eta: '2023-04-15' },
    { id: 'SH002', destination: 'London, UK', status: 'Customs Clearance', eta: '2023-04-18' },
    { id: 'SH003', destination: 'Paris, France', status: 'Delivered', eta: '2023-04-10' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Shipment Tracking</h1>
      <div className="mb-8">
        <ShipmentMap />
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ETA</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {shipments.map((shipment) => (
              <tr key={shipment.id}>
                <td className="px-6 py-4 whitespace-nowrap">{shipment.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{shipment.destination}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={shipment.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{shipment.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Transit':
        return 'bg-blue-100 text-blue-800';
      case 'Customs Clearance':
        return 'bg-yellow-100 text-yellow-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'In Transit':
        return <Truck className="h-4 w-4 mr-1" />;
      case 'Customs Clearance':
        return <Package className="h-4 w-4 mr-1" />;
      case 'Delivered':
        return <CheckCircle className="h-4 w-4 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
      {getStatusIcon(status)}
      {status}
    </span>
  );
};

export default ShipmentTracking;