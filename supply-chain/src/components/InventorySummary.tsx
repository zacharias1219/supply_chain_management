import { useEffect, useState } from 'react';

interface InventoryItem {
  name: string;
  quantity: number;
  category: string;
}

interface InventorySummaryData {
  totalItems: number;
  categories: string[];
  lowStockItems: InventoryItem[];
}

const InventorySummary = () => {
  const [summary, setSummary] = useState<InventorySummaryData>({
    totalItems: 0,
    categories: [],
    lowStockItems: [],
  });

  useEffect(() => {
    const fetchSummary = async () => {
      const res = await fetch('/api/inventory/summary');
      const data: InventorySummaryData = await res.json();
      setSummary(data);
    };
    fetchSummary();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Inventory Summary</h2>
      <p>Total Items: {summary.totalItems}</p>
      <p>Categories: {summary.categories.join(', ')}</p>
      <h3 className="text-lg font-bold mt-4">Low Stock Items:</h3>
      <ul>
        {summary.lowStockItems.map((item, index) => (
          <li key={index}>
            {item.name} (Category: {item.category}) - {item.quantity} left
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventorySummary;
