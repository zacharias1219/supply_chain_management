import Link from 'next/link';
import { Card } from '../components/ui/card';

interface OverviewCardsProps {
  summaries: {
    inventory: number | null;
    suppliers: number | null;
    routes: number | null;
    costs: number | null;
    risks: number | null;
    realTime: number | null;
    sustainability: number | null;
    demand: number | null;
    supplyChain: number | null;
  };
}

const OverviewCards = ({ summaries }: OverviewCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <Link href="/inventory-management">
        <Card className="p-4 bg-white rounded shadow-lg hover:bg-green-50">
          <h2 className="text-xl font-bold">Inventory Management</h2>
          <p>{summaries.inventory !== null ? `Total Items: ${summaries.inventory}` : 'Loading...'}</p>
        </Card>
      </Link>
      <Link href="/supplier-management">
        <Card className="p-4 bg-white rounded shadow-lg hover:bg-green-50">
          <h2 className="text-xl font-bold">Supplier Management</h2>
          <p>{summaries.suppliers !== null ? `Total Suppliers: ${summaries.suppliers}` : 'Loading...'}</p>
        </Card>
      </Link>
      <Link href="/route-optimization">
        <Card className="p-4 bg-white rounded shadow-lg hover:bg-green-50">
          <h2 className="text-xl font-bold">Route Optimization</h2>
          <p>{summaries.routes !== null ? `Total Routes: ${summaries.routes}` : 'Loading...'}</p>
        </Card>
      </Link>
      <Link href="/cost-optimization">
        <Card className="p-4 bg-white rounded shadow-lg hover:bg-green-50">
          <h2 className="text-xl font-bold">Cost Optimization</h2>
          <p>{summaries.costs !== null ? `Total Costs Tracked: ${summaries.costs}` : 'Loading...'}</p>
        </Card>
      </Link>
      <Link href="/risk-management">
        <Card className="p-4 bg-white rounded shadow-lg hover:bg-green-50">
          <h2 className="text-xl font-bold">Risk Management</h2>
          <p>{summaries.risks !== null ? `Total Risks: ${summaries.risks}` : 'Loading...'}</p>
        </Card>
      </Link>
      <Link href="/real-time-monitoring">
        <Card className="p-4 bg-white rounded shadow-lg hover:bg-green-50">
          <h2 className="text-xl font-bold">Real-Time Monitoring</h2>
          <p>{summaries.realTime !== null ? `Real-Time Metrics: ${summaries.realTime}` : 'Loading...'}</p>
        </Card>
      </Link>
      <Link href="/sustainability-tracking">
        <Card className="p-4 bg-white rounded shadow-lg hover:bg-green-50">
          <h2 className="text-xl font-bold">Sustainability Tracking</h2>
          <p>{summaries.sustainability !== null ? `Sustainability Metrics: ${summaries.sustainability}` : 'Loading...'}</p>
        </Card>
      </Link>
      <Link href="/demand-forecasting">
        <Card className="p-4 bg-white rounded shadow-lg hover:bg-green-50">
          <h2 className="text-xl font-bold">Demand Forecasting</h2>
          <p>{summaries.demand !== null ? `Demand Forecasts: ${summaries.demand}` : 'Loading...'}</p>
        </Card>
      </Link>
      <Link href="/supply-chain-management">
        <Card className="p-4 bg-white rounded shadow-lg hover:bg-green-50">
          <h2 className="text-xl font-bold">Supply Chain Management</h2>
          <p>{summaries.supplyChain !== null ? `Supply Chain Metrics: ${summaries.supplyChain}` : 'Loading...'}</p>
        </Card>
      </Link>
    </div>
  );
};

export default OverviewCards;
