import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const InventoryManagement = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: 0, description: '', category: '' });

  useEffect(() => {
    const fetchInventory = async () => {
      const res = await fetch('/api/inventory');
      const data = await res.json();
      setInventoryItems(data);
    };
    fetchInventory();
  }, []);

  const addItem = async () => {
    const res = await fetch('/api/inventory', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    });
    const data = await res.json();
    setInventoryItems([...inventoryItems, data]);
    setNewItem({ name: '', quantity: 0, description: '', category: '' });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Inventory Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {inventoryItems.map((item) => (
          <Card key={item._id} className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Description: {item.description}</p>
            <p>Category: {item.category}</p>
          </Card>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-2">Add New Item</h2>
        <input
          type="text"
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="p-2 border rounded mb-2"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: Number(e.target.value) })}
          className="p-2 border rounded mb-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
          className="p-2 border rounded mb-2"
        />
        <input
          type="text"
          placeholder="Category"
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
          className="p-2 border rounded mb-2"
        />
        <Button onClick={addItem} className="mt-2 bg-teal-600 text-white">Add Item</Button>
      </div>
    </div>
  );
};

export default InventoryManagement;
