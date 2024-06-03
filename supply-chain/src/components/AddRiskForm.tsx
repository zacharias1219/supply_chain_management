import { useState } from 'react';

interface AddRiskFormProps {
  onAdd: () => void;
}

const AddRiskForm = ({ onAdd }: AddRiskFormProps) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [impact, setImpact] = useState(0);
  const [likelihood, setLikelihood] = useState(0);
  const [mitigationStrategy, setMitigationStrategy] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/risks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description,
        category,
        impact,
        likelihood,
        mitigationStrategy,
      }),
    });
    if (res.ok) {
      onAdd();
      setDescription('');
      setCategory('');
      setImpact(0);
      setLikelihood(0);
      setMitigationStrategy('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Add Risk</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Impact (1-10)</label>
        <input
          type="number"
          value={impact}
          onChange={(e) => setImpact(parseInt(e.target.value))}
          className="w-full p-2 border rounded"
          required
          min={1}
          max={10}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Likelihood (1-10)</label>
        <input
          type="number"
          value={likelihood}
          onChange={(e) => setLikelihood(parseInt(e.target.value))}
          className="w-full p-2 border rounded"
          required
          min={1}
          max={10}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Mitigation Strategy</label>
        <textarea
          value={mitigationStrategy}
          onChange={(e) => setMitigationStrategy(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add Risk</button>
    </form>
  );
};

export default AddRiskForm;
