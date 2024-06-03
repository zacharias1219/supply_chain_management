import Layout from './layout';
import DemandForecastDashboard from '../components/DemandForecastDashboard';
import AiDemandForecast from '../components/AiDemandForecast';

const DemandForecastingPage = () => {
  return (
    <Layout>
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Demand Forecasting</h1>
        <DemandForecastDashboard />
        <AiDemandForecast />
      </div>
    </Layout>
  );
};

export default DemandForecastingPage;
