// src/components/RealTimeMonitoring.tsx
import { useState, useEffect } from 'react';
import { Card, Table, TableHeader, TableBody, TableRow, TableCell } from 'shadcn-ui';

type MonitoringItem = {
  id: number;
  description: string;
  status: string;
};

const RealTimeMonitoring = () => {
  const [monitoringData, setMonitoringData] = useState<MonitoringItem[]>([]);

  useEffect(() => {
    fetch('/api/monitoring')
      .then((response) => response.json())
      .then((data: MonitoringItem[]) => setMonitoringData(data));
  }, []);

  return (
    <Card className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Real-Time Monitoring</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {monitoringData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default RealTimeMonitoring;
