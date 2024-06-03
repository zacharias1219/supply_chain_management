import { useEffect, useState } from 'react';
import Layout from './layout';
import Header from '../components/Header';
import OverviewCards from '../components/OverviewCards';
import RecentActivities from '../components/RecentActivities';
import Notifications from '../components/Notifications';

const HomePage = () => {
  const [summaries, setSummaries] = useState({
    inventory: null,
    suppliers: null,
    routes: null,
    costs: null,
    risks: null,
    realTime: null,
    sustainability: null,
    demand: null,
    supplyChain: null,
  });

  useEffect(() => {
    const fetchSummaries = async () => {
      const res = await fetch('/api/summaries');
      const data = await res.json();
      setSummaries(data);
    };
    fetchSummaries();
  }, []);

  return (
    <Layout>
      <Header />
      <div className="p-4">
        <OverviewCards summaries={summaries} />
        <RecentActivities />
        <Notifications />
      </div>
    </Layout>
  );
};

export default HomePage;
