import { useState, useEffect } from 'react';
import Layout from './layout';
import AddSupplierForm from '../components/AddSupplierForm';
import SupplierTable from '../components/SupplierTable';

interface Supplier {
  _id: string;
  name: string;
  contactInfo: string;
  address: string;
  category: string;
}

const SupplierManagementPage = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  const fetchSuppliers = async () => {
    const res = await fetch('/api/suppliers');
    const data: Supplier[] = await res.json();
    setSuppliers(data);
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const handleAdd = () => {
    fetchSuppliers();
  };

  const handleEdit = async (supplier: Supplier) => {
    // Logic to edit supplier
    console.log('Edit supplier:', supplier);
  };

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/suppliers/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      fetchSuppliers();
    }
  };

  return (
    <Layout>
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Supplier Management</h1>
        <AddSupplierForm onAdd={handleAdd} />
        <SupplierTable suppliers={suppliers} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </Layout>
  );
};

export default SupplierManagementPage;
