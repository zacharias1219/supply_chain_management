import { useEffect, useState } from 'react';

interface ShippingLogistics {
  shipmentId: string;
  status: string;
  cost: number;
  date: string;
}

const ShippingLogisticsDashboard = () => {
  const [data, setData] = useState<ShippingLogistics[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/supply-chain/data');
      const result = await res.json();
      setData(result.shippingLogisticsData);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Shipping and Logistics Dashboard</h2>
      <div>
        <h3 className="text-lg font-bold">Shipping and Logistics Data</h3>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              Shipment ID: {item.shipmentId}, Status: {item.status}, Cost: {item.cost}, Date: {new Date(item.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShippingLogisticsDashboard;
