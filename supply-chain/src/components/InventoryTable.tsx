// src/components/InventoryTable.tsx
import { useState } from 'react';

interface InventoryItem {
  _id: string;
  name: string;
  quantity: number;
  description: string;
  category: string;
}

interface InventoryTableProps {
  inventory: InventoryItem[];
  onEdit: (item: InventoryItem) => void;
  onDelete: (id: string) => void;
}

const InventoryTable = ({ inventory, onEdit, onDelete }: InventoryTableProps) => {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    item.category.toLowerCase().includes(categoryFilter.toLowerCase())
  );

  return (
    <div>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full p-2 border rounded ml-2"
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Description</th>
            <th className="py-2">Category</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredInventory.map((item) => (
            <tr key={item._id}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.quantity}</td>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2">{item.category}</td>
              <td className="border px-4 py-2">
                <button onClick={() => onEdit(item)} className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                <button onClick={() => onDelete(item._id)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
