// src/pages/index.tsx
import Layout from './layout';
import InventoryManagement from '../components/InventoryManagement';
import SupplierManagement from '../components/SupplierManagement';
import RouteOptimization from '../components/RouteOptimization';
import CostOptimization from '../components/CostOptimization';
import RiskManagement from '../components/RiskManagement';
import RealTimeMonitoring from '../components/RealTimeMonitoring';
import SustainabilityTracking from '../components/SustainabilityTracking';
import DemandForecasting from '../components/DemandForecasting';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Alert } from '../components/ui/alert';

const HomePage = () => {
  return (
    <Layout>
      <Card className="text-center p-6 bg-white rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">AI-Enhanced Supply Chain Optimization Tool</h1>
        <p className="text-lg">Optimize your supply chain operations with AI-driven insights and predictions.</p>
        <Button className="mt-4 bg-green-500 text-white">Get Started</Button>
      </Card>
      <Alert className="mt-4 bg-yellow-200 text-yellow-800">
        This tool uses advanced AI algorithms to help you optimize your supply chain.
      </Alert>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <InventoryManagement />
        <SupplierManagement />
        <RouteOptimization />
        <CostOptimization />
        <RiskManagement />
        <RealTimeMonitoring />
        <SustainabilityTracking />
        <DemandForecasting />
      </div>
    </Layout>
  );
};

export default HomePage;
