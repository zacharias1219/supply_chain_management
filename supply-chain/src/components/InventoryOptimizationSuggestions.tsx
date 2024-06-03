import { useEffect, useState } from 'react';

interface InventoryItem {
  name: string;
  quantity: number;
  category: string;
}

interface InventoryOptimizationData {
  slowMovingItems: InventoryItem[];
  overstockItems: InventoryItem[];
}

const InventoryOptimizationSuggestions = () => {
  const [suggestions, setSuggestions] = useState<InventoryOptimizationData>({
    slowMovingItems: [],
    overstockItems: [],
  });

  useEffect(() => {
    const fetchSuggestions = async () => {
      const res = await fetch('/api/inventory/optimization-suggestions');
      const data: InventoryOptimizationData = await res.json();
      setSuggestions(data);
    };
    fetchSuggestions();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Inventory Optimization Suggestions</h2>
      <h3 className="text-lg font-bold mt-4">Slow Moving Items:</h3>
      <ul>
        {suggestions.slowMovingItems.map((item, index) => (
          <li key={index}>
            {item.name} (Category: {item.category}) - {item.quantity} left
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold mt-4">Overstock Items:</h3>
      <ul>
        {suggestions.overstockItems.map((item, index) => (
          <li key={index}>
            {item.name} (Category: {item.category}) - {item.quantity} in stock
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryOptimizationSuggestions;
