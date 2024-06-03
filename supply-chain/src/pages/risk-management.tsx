import { useState, useEffect } from 'react';
import Layout from './layout';
import AddRiskForm from '../components/AddRiskForm';
import RiskTable from '../components/RiskTable';
import RiskSummary from '../components/RiskSummary';
import RiskOptimizationSuggestions from '../components/RiskOptimizationSuggestions';
import AiRiskAnalysis from '../components/AiRiskAnalysis';

interface Risk {
  _id: string;
  description: string;
  category: string;
  impact: number;
  likelihood: number;
  mitigationStrategy: string;
}

const RiskManagementPage = () => {
  const [risks, setRisks] = useState<Risk[]>([]);

  const fetchRisks = async () => {
    const res = await fetch('/api/risks');
    const data: Risk[] = await res.json();
    setRisks(data);
  };

  useEffect(() => {
    fetchRisks();
  }, []);

  const handleAdd = () => {
    fetchRisks();
  };

  const handleEdit = async (risk: Risk) => {
    // Logic to edit risk
    console.log('Edit risk:', risk);
  };

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/risks/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      fetchRisks();
    }
  };

  return (
    <Layout>
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Risk Management</h1>
        <AddRiskForm onAdd={handleAdd} />
        <RiskSummary />
        <RiskOptimizationSuggestions />
        <AiRiskAnalysis />
        <RiskTable risks={risks} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </Layout>
  );
};

export default RiskManagementPage;
