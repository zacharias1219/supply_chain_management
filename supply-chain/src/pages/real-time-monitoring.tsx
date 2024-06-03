import Layout from './layout';
import RealTimeDashboard from '../components/RealTimeDashboard';
import AiVisualization from '../components/AiVisualization';

const RealTimeMonitoringPage = () => {
  return (
    <Layout>
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Real-Time Monitoring</h1>
        <RealTimeDashboard />
        <AiVisualization />
      </div>
    </Layout>
  );
};

export default RealTimeMonitoringPage;
