// src/pages/real-time-monitoring.tsx
import Layout from './layout';
import RealTimeMonitoring from '../components/RealTimeMonitoring';

const RealTimeMonitoringPage = () => {
  return (
    <Layout>
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Real-Time Monitoring</h1>
        <RealTimeMonitoring />
      </div>
    </Layout>
  );
};

export default RealTimeMonitoringPage;
