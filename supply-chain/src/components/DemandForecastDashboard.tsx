import { useEffect, useState } from 'react';

interface Sales {
  product: string;
  quantity: number;
  date: string;
}

const DemandForecastDashboard = () => {
  const [data, setData] = useState<Sales[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/demand/data');
      const data: Sales[] = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Demand Forecast Dashboard</h2>
      <div>
        <h3 className="text-lg font-bold">Historical Sales Data</h3>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              Product: {item.product}, Quantity: {item.quantity}, Date: {new Date(item.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DemandForecastDashboard;
