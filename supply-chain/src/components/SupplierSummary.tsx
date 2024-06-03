import { useEffect, useState } from 'react';

interface Supplier {
  name: string;
  category: string;
  createdAt: string;
}

interface SupplierSummaryData {
  totalSuppliers: number;
  categories: string[];
  recentSuppliers: Supplier[];
}

const SupplierSummary = () => {
  const [summary, setSummary] = useState<SupplierSummaryData>({
    totalSuppliers: 0,
    categories: [],
    recentSuppliers: [],
  });

  useEffect(() => {
    const fetchSummary = async () => {
      const res = await fetch('/api/suppliers/summary');
      const data: SupplierSummaryData = await res.json();
      setSummary(data);
    };
    fetchSummary();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Supplier Summary</h2>
      <p>Total Suppliers: {summary.totalSuppliers}</p>
      <p>Categories: {summary.categories.join(', ')}</p>
      <h3 className="text-lg font-bold mt-4">Recent Suppliers:</h3>
      <ul>
        {summary.recentSuppliers.map((supplier, index) => (
          <li key={index}>
            {supplier.name} (Category: {supplier.category}) - Joined on {new Date(supplier.createdAt).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupplierSummary;
