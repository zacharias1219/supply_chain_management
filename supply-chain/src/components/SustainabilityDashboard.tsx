import { useEffect, useState } from 'react';

interface Sustainability {
  metric: string;
  value: number;
  unit: string;
  date: string;
}

const SustainabilityDashboard = () => {
  const [data, setData] = useState<Sustainability[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/sustainability/data');
      const data: Sustainability[] = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Sustainability Dashboard</h2>
      <div>
        <h3 className="text-lg font-bold">Sustainability Metrics</h3>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.metric} - {item.value} {item.unit} (Date: {new Date(item.date).toLocaleDateString()})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SustainabilityDashboard;
