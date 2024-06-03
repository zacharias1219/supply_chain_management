// src/pages/index.tsx
import Layout from './layout';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Alert } from '../components/ui/alert';

const HomePage = () => {
  const [summaryData, setSummaryData] = useState({
    inventory: { totalItems: 0, criticalItems: [] },
    suppliers: { totalSuppliers: 0, recentSupplier: '' },
    routes: { totalRoutes: 0, recentRoute: '' },
    costs: { totalSavings: 0, recentCost: '' },
    risks: { totalRisks: 0, criticalRisk: '' },
    monitoring: { totalMonitored: 0, criticalStatus: '' },
    sustainability: { totalPractices: 0, impactfulPractice: '' },
    forecasting: { latestForecast: '', accuracy: 0 },
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/summary');
      const data = await res.json();
      setSummaryData(data);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="text-center p-6 bg-white rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">AI-Enhanced Supply Chain Optimization Tool</h1>
        <p className="text-lg">Optimize your supply chain operations with AI-driven insights and predictions.</p>
        <Button className="mt-4 bg-green-500 text-white">Get Started</Button>
      </div>
      <Alert className="mt-4 bg-yellow-200 text-yellow-800 text-center">
        This tool uses advanced AI algorithms to help you optimize your supply chain.
      </Alert>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
        <Link href="/inventory-management" legacyBehavior>
          <a>
            <Card className="bg-white p-4 rounded shadow-lg cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">Inventory Management</h2>
              <p>Total Items: {summaryData.inventory.totalItems}</p>
              <p>Critical Items: {summaryData.inventory.criticalItems.join(', ')}</p>
            </Card>
          </a>
        </Link>
        <Link href="/supplier-management" legacyBehavior>
          <a>
            <Card className="bg-white p-4 rounded shadow-lg cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">Supplier Management</h2>
              <p>Total Suppliers: {summaryData.suppliers.totalSuppliers}</p>
              <p>Recent Supplier: {summaryData.suppliers.recentSupplier}</p>
            </Card>
          </a>
        </Link>
        <Link href="/route-optimization" legacyBehavior>
          <a>
            <Card className="bg-white p-4 rounded shadow-lg cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">Route Optimization</h2>
              <p>Total Routes: {summaryData.routes.totalRoutes}</p>
              <p>Recent Route: {summaryData.routes.recentRoute}</p>
            </Card>
          </a>
        </Link>
        <Link href="/cost-optimization" legacyBehavior>
          <a>
            <Card className="bg-white p-4 rounded shadow-lg cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">Cost Optimization</h2>
              <p>Total Savings: ${summaryData.costs.totalSavings}</p>
              <p>Recent Cost: {summaryData.costs.recentCost}</p>
            </Card>
          </a>
        </Link>
        <Link href="/risk-management" legacyBehavior>
          <a>
            <Card className="bg-white p-4 rounded shadow-lg cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">Risk Management</h2>
              <p>Total Risks: {summaryData.risks.totalRisks}</p>
              <p>Critical Risk: {summaryData.risks.criticalRisk}</p>
            </Card>
          </a>
        </Link>
        <Link href="/real-time-monitoring" legacyBehavior>
          <a>
            <Card className="bg-white p-4 rounded shadow-lg cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">Real-Time Monitoring</h2>
              <p>Total Monitored: {summaryData.monitoring.totalMonitored}</p>
              <p>Critical Status: {summaryData.monitoring.criticalStatus}</p>
            </Card>
          </a>
        </Link>
        <Link href="/sustainability-tracking" legacyBehavior>
          <a>
            <Card className="bg-white p-4 rounded shadow-lg cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">Sustainability Tracking</h2>
              <p>Total Practices: {summaryData.sustainability.totalPractices}</p>
              <p>Impactful Practice: {summaryData.sustainability.impactfulPractice}</p>
            </Card>
          </a>
        </Link>
        <Link href="/demand-forecasting" legacyBehavior>
          <a>
            <Card className="bg-white p-4 rounded shadow-lg cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">Demand Forecasting</h2>
              <p>Latest Forecast: {summaryData.forecasting.latestForecast}</p>
              <p>Accuracy: {summaryData.forecasting.accuracy}%</p>
            </Card>
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default HomePage;
