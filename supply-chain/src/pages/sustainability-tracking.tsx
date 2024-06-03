import Layout from './layout';
import SustainabilityDashboard from '../components/SustainabilityDashboard';
import AiSustainabilitySuggestions from '../components/AiSustainabilitySuggestions';

const SustainabilityTrackingPage = () => {
  return (
    <Layout>
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Sustainability Tracking</h1>
        <SustainabilityDashboard />
        <AiSustainabilitySuggestions />
      </div>
    </Layout>
  );
};

export default SustainabilityTrackingPage;
