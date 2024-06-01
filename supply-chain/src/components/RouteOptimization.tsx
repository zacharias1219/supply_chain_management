// src/components/RouteOptimization.tsx
import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Table, TableHeader, TableBody, TableRow, TableCell } from './ui/table';

type Route = {
  id: number;
  description: string;
};

const RouteOptimization = () => {
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
    fetch('/api/routes')
      .then((response) => response.json())
      .then((data: Route[]) => setRoutes(data));
  }, []);

  return (
    <Card className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Route Optimization</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Route</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {routes.map((route) => (
            <TableRow key={route.id}>
              <TableCell>{route.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default RouteOptimization;
