import { useState, useEffect } from 'react';
import Layout from './layout';
import AddCostForm from '../components/AddCostForm';
import CostTable from '../components/CostTable';
import CostSummary from '../components/CostSummary';

interface Cost {
  _id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
}

const CostOptimizationPage = () => {
  const [costs, setCosts] = useState<Cost[]>([]);

  const fetchCosts = async () => {
    const res = await fetch('/api/costs');
    const data: Cost[] = await res.json();
    setCosts(data);
  };

  useEffect(() => {
    fetchCosts();
  }, []);

  const handleAdd = () => {
    fetchCosts();
  };

  const handleEdit = async (cost: Cost) => {
    // Logic to edit cost
    console.log('Edit cost:', cost);
  };

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/costs/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      fetchCosts();
    }
  };

  return (
    <Layout>
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Cost Optimization</h1>
        <AddCostForm onAdd={handleAdd} />
        <CostSummary />
        <CostTable costs={costs} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </Layout>
  );
};

export default CostOptimizationPage;
