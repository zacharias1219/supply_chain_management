import { useState } from 'react';

interface Supplier {
  _id: string;
  name: string;
  contactInfo: string;
  address: string;
  category: string;
}

interface SupplierTableProps {
  suppliers: Supplier[];
  onEdit: (supplier: Supplier) => void;
  onDelete: (id: string) => void;
}

const SupplierTable = ({ suppliers, onEdit, onDelete }: SupplierTableProps) => {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(search.toLowerCase()) &&
    supplier.category.toLowerCase().includes(categoryFilter.toLowerCase())
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
            <th className="py-2">Contact Information</th>
            <th className="py-2">Address</th>
            <th className="py-2">Category</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredSuppliers.map((supplier) => (
            <tr key={supplier._id}>
              <td className="border px-4 py-2">{supplier.name}</td>
              <td className="border px-4 py-2">{supplier.contactInfo}</td>
              <td className="border px-4 py-2">{supplier.address}</td>
              <td className="border px-4 py-2">{supplier.category}</td>
              <td className="border px-4 py-2">
                <button onClick={() => onEdit(supplier)} className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                <button onClick={() => onDelete(supplier._id)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierTable;
