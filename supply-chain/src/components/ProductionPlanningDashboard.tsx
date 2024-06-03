import { useEffect, useState } from 'react';

interface ProductionPlanning {
  product: string;
  quantity: number;
  machinery: string;
  labor: string;
  wip: number;
  date: string;
}

const ProductionPlanningDashboard = () => {
  const [data, setData] = useState<ProductionPlanning[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/supply-chain/data');
      const result = await res.json();
      setData(result.productionPlanningData);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Production Planning Dashboard</h2>
      <div>
        <h3 className="text-lg font-bold">Production Planning Data</h3>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              Product: {item.product}, Quantity: {item.quantity}, Machinery: {item.machinery}, Labor: {item.labor}, WIP: {item.wip}, Date: {new Date(item.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductionPlanningDashboard;
