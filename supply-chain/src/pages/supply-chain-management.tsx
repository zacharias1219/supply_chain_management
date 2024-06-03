import Layout from './layout';
import SupplyPlanningDashboard from '../components/SupplyPlanningDashboard';
import ProductionPlanningDashboard from '../components/ProductionPlanningDashboard';
import VendorManagementDashboard from '../components/VendorManagementDashboard';
import ShippingLogisticsDashboard from '../components/ShippingLogisticsDashboard';

const SupplyChainManagementPage = () => {
  return (
    <Layout>
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Supply Chain Management</h1>
        <SupplyPlanningDashboard />
        <ProductionPlanningDashboard />
        <VendorManagementDashboard />
        <ShippingLogisticsDashboard />
      </div>
    </Layout>
  );
};

export default SupplyChainManagementPage;
