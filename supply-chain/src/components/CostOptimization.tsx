// src/components/CostOptimization.tsx
import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Table, TableHeader, TableBody, TableRow, TableCell } from './ui/table';

type Cost = {
  id: number;
  description: string;
  amount: number;
};

const CostOptimization = () => {
  const [costs, setCosts] = useState<Cost[]>([]);

  useEffect(() => {
    fetch('/api/costs')
      .then((response) => response.json())
      .then((data: Cost[]) => setCosts(data));
  }, []);

  return (
    <Card className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Cost Optimization</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {costs.map((cost) => (
            <TableRow key={cost.id}>
              <TableCell>{cost.description}</TableCell>
              <TableCell>${cost.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default CostOptimization;
