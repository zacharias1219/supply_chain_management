import { useEffect, useState } from 'react';

interface SupplyPlanning {
  product: string;
  quantity: number;
  orderPoint: number;
  maxLevel: number;
  leadTime: number;
  date: string;
}

const SupplyPlanningDashboard = () => {
  const [data, setData] = useState<SupplyPlanning[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/supply-chain/data');
      const result = await res.json();
      setData(result.supplyPlanningData);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Supply Planning Dashboard</h2>
      <div>
        <h3 className="text-lg font-bold">Supply Planning Data</h3>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              Product: {item.product}, Quantity: {item.quantity}, Order Point: {item.orderPoint}, Max Level: {item.maxLevel}, Lead Time: {item.leadTime} days, Date: {new Date(item.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SupplyPlanningDashboard;
