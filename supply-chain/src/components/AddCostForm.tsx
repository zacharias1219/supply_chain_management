import { useState } from 'react';

interface AddCostFormProps {
  onAdd: () => void;
}

const AddCostForm = ({ onAdd }: AddCostFormProps) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/costs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description,
        amount,
        category,
        date,
      }),
    });
    if (res.ok) {
      onAdd();
      setDescription('');
      setAmount(0);
      setCategory('');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Add Cost Entry</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Amount</label>
        <input type="number" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} className="w-full p-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 border rounded" required />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add Cost</button>
    </form>
  );
};

export default AddCostForm;
