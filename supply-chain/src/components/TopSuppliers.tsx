import { useEffect, useState } from 'react';

interface Supplier {
  name: string;
  performanceScore: number;
}

const TopSuppliers = () => {
  const [topSuppliers, setTopSuppliers] = useState<Supplier[]>([]);

  useEffect(() => {
    const fetchTopSuppliers = async () => {
      const res = await fetch('/api/suppliers/top-suppliers');
      const data: Supplier[] = await res.json();
      setTopSuppliers(data);
    };
    fetchTopSuppliers();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Top Suppliers</h2>
      <ul>
        {topSuppliers.map((supplier, index) => (
          <li key={index}>
            {supplier.name} - Performance Score: {supplier.performanceScore}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSuppliers;
