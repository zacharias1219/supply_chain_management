import { useState, useEffect } from 'react';
import Layout from './layout';
import AddInventoryForm from '../components/AddInventoryForm';
import InventoryTable from '../components/InventoryTable';
import InventorySummary from '../components/InventorySummary';
import InventoryOptimizationSuggestions from '../components/InventoryOptimizationSuggestions';

interface InventoryItem {
  _id: string;
  name: string;
  quantity: number;
  description: string;
  category: string;
}

const InventoryManagementPage = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  const fetchInventory = async () => {
    const res = await fetch('/api/inventory');
    const data: InventoryItem[] = await res.json();
    setInventory(data);
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const handleAdd = () => {
    fetchInventory();
  };

  const handleEdit = async (item: InventoryItem) => {
    // Logic to edit inventory item
    console.log('Edit item:', item);
  };

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/inventory/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      fetchInventory();
    }
  };

  return (
    <Layout>
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Inventory Management</h1>
        <AddInventoryForm onAdd={handleAdd} />
        <InventorySummary />
        <InventoryOptimizationSuggestions />
        <InventoryTable inventory={inventory} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </Layout>
  );
};

export default InventoryManagementPage;