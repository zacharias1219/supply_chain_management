// src/pages/risk-management.tsx
import Layout from './layout';
import RiskManagement from '../components/RiskManagement';

const RiskManagementPage = () => {
  return (
    <Layout>
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Risk Management</h1>
        <RiskManagement />
      </div>
    </Layout>
  );
};

export default RiskManagementPage;
