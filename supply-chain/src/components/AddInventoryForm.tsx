// src/components/AddInventoryForm.tsx
import { useState } from 'react';

interface AddInventoryFormProps {
  onAdd: () => void;
}

const AddInventoryForm = ({ onAdd }: AddInventoryFormProps) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/inventory', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, quantity, description, category }),
    });
    if (res.ok) {
      onAdd();
      setName('');
      setQuantity(0);
      setDescription('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Add Inventory Item</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Quantity</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} className="w-full p-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border rounded" />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add Item</button>
    </form>
  );
};

export default AddInventoryForm;
