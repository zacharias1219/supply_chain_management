import { useState } from 'react';

interface Cost {
  _id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
}

interface CostTableProps {
  costs: Cost[];
  onEdit: (cost: Cost) => void;
  onDelete: (id: string) => void;
}

const CostTable = ({ costs, onEdit, onDelete }: CostTableProps) => {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredCosts = costs.filter(cost =>
    cost.description.toLowerCase().includes(search.toLowerCase()) &&
    cost.category.toLowerCase().includes(categoryFilter.toLowerCase())
  );

  return (
    <div>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search Description"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Search Category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full p-2 border rounded ml-2"
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Description</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Category</th>
            <th className="py-2">Date</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCosts.map((cost) => (
            <tr key={cost._id}>
              <td className="border px-4 py-2">{cost.description}</td>
              <td className="border px-4 py-2">{cost.amount}</td>
              <td className="border px-4 py-2">{cost.category}</td>
              <td className="border px-4 py-2">{new Date(cost.date).toLocaleDateString()}</td>
              <td className="border px-4 py-2">
                <button onClick={() => onEdit(cost)} className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                <button onClick={() => onDelete(cost._id)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CostTable;
