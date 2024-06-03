// src/pages/demand-forecasting.tsx
import Layout from './layout';
import DemandForecasting from '../components/DemandForecasting';

const DemandForecastingPage = () => {
  return (
    <Layout>
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Demand Forecasting</h1>
        <DemandForecasting />
      </div>
    </Layout>
  );
};

export default DemandForecastingPage;
