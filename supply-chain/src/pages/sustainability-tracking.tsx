// src/pages/sustainability-tracking.tsx
import Layout from './layout';
import SustainabilityTracking from '../components/SustainabilityTracking';

const SustainabilityTrackingPage = () => {
  return (
    <Layout>
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Sustainability Tracking</h1>
        <SustainabilityTracking />
      </div>
    </Layout>
  );
};

export default SustainabilityTrackingPage;
