import { useEffect, useState } from 'react';

interface VendorManagement {
  vendor: string;
  performance: number;
  contract: string;
  date: string;
}

const VendorManagementDashboard = () => {
  const [data, setData] = useState<VendorManagement[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/supply-chain/data');
      const result = await res.json();
      setData(result.vendorManagementData);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Vendor Management Dashboard</h2>
      <div>
        <h3 className="text-lg font-bold">Vendor Management Data</h3>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              Vendor: {item.vendor}, Performance: {item.performance}, Contract: {item.contract}, Date: {new Date(item.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VendorManagementDashboard;
