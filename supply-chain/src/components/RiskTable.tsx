import { useState } from 'react';

interface Risk {
  _id: string;
  description: string;
  category: string;
  impact: number;
  likelihood: number;
  mitigationStrategy: string;
}

interface RiskTableProps {
  risks: Risk[];
  onEdit: (risk: Risk) => void;
  onDelete: (id: string) => void;
}

const RiskTable = ({ risks, onEdit, onDelete }: RiskTableProps) => {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredRisks = risks.filter(risk =>
    risk.description.toLowerCase().includes(search.toLowerCase()) &&
    risk.category.toLowerCase().includes(categoryFilter.toLowerCase())
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
            <th className="py-2">Category</th>
            <th className="py-2">Impact</th>
            <th className="py-2">Likelihood</th>
            <th className="py-2">Mitigation Strategy</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRisks.map((risk) => (
            <tr key={risk._id}>
              <td className="border px-4 py-2">{risk.description}</td>
              <td className="border px-4 py-2">{risk.category}</td>
              <td className="border px-4 py-2">{risk.impact}</td>
              <td className="border px-4 py-2">{risk.likelihood}</td>
              <td className="border px-4 py-2">{risk.mitigationStrategy}</td>
              <td className="border px-4 py-2">
                <button onClick={() => onEdit(risk)} className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                <button onClick={() => onDelete(risk._id)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RiskTable;
