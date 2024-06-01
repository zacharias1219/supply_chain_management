// src/components/SustainabilityTracking.tsx
import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Table, TableHeader, TableBody, TableRow, TableCell } from './ui/table';

type SustainabilityItem = {
  id: number;
  description: string;
  impact: string;
};

const SustainabilityTracking = () => {
  const [sustainabilityData, setSustainabilityData] = useState<SustainabilityItem[]>([]);

  useEffect(() => {
    fetch('/api/sustainability')
      .then((response) => response.json())
      .then((data: SustainabilityItem[]) => setSustainabilityData(data));
  }, []);

  return (
    <Card className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Sustainability Tracking</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Impact</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sustainabilityData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.impact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default SustainabilityTracking;
