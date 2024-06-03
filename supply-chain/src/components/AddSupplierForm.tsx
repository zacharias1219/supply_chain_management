import { useState } from 'react';

interface AddSupplierFormProps {
  onAdd: () => void;
}

const AddSupplierForm = ({ onAdd }: AddSupplierFormProps) => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [address, setAddress] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/suppliers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, contactInfo, address, category }),
    });
    if (res.ok) {
      onAdd();
      setName('');
      setContactInfo('');
      setAddress('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Add Supplier</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Contact Information</label>
        <input type="text" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} className="w-full p-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full p-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border rounded" required />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add Supplier</button>
    </form>
  );
};

export default AddSupplierForm;
