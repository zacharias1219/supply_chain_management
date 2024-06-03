import { useState, useEffect } from 'react';
import Layout from './layout';
import AddRouteForm from '../components/AddRouteForm';
import RouteTable from '../components/RouteTable';
import RouteSummary from '../components/RouteSummary';
import RouteOptimizationSuggestions from '../components/RouteOptimizationSuggestions';

interface Route {
  _id: string;
  startingPoint: string;
  destination: string;
  waypoints: string[];
  distance: number;
  estimatedTime: number;
}

const RouteOptimizationPage = () => {
  const [routes, setRoutes] = useState<Route[]>([]);

  const fetchRoutes = async () => {
    const res = await fetch('/api/routes');
    const data: Route[] = await res.json();
    setRoutes(data);
  };

  useEffect(() => {
    fetchRoutes();
  }, []);

  const handleAdd = () => {
    fetchRoutes();
  };

  const handleEdit = async (route: Route) => {
    // Logic to edit route
    console.log('Edit route:', route);
  };

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/routes/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      fetchRoutes();
    }
  };

  return (
    <Layout>
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Route Optimization</h1>
        <AddRouteForm onAdd={handleAdd} />
        <RouteSummary />
        <RouteOptimizationSuggestions />
        <RouteTable routes={routes} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </Layout>
  );
};

export default RouteOptimizationPage;
