import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';

const DocumentManagement: React.FC = () => {
  const documents = [
    { id: 'DOC001', name: 'Invoice - SH001', type: 'PDF', date: '2023-04-01' },
    { id: 'DOC002', name: 'Packing List - SH002', type: 'XLSX', date: '2023-04-05' },
    { id: 'DOC003', name: 'Certificate of Origin - SH003', type: 'PDF', date: '2023-04-08' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Document Management</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-gray-400 mr-2" />
                    {doc.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{doc.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{doc.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="text-green-600 hover:text-green-800">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentManagement;