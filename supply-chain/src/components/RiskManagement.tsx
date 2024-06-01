// src/components/RiskManagement.tsx
import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Table, TableHeader, TableBody, TableRow, TableCell } from './ui/table';

type Risk = {
  id: number;
  description: string;
};

const RiskManagement = () => {
  const [risks, setRisks] = useState<Risk[]>([]);

  useEffect(() => {
    fetch('/api/risks')
      .then((response) => response.json())
      .then((data: Risk[]) => setRisks(data));
  }, []);

  return (
    <Card className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Risk Management</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Risk</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {risks.map((risk) => (
            <TableRow key={risk.id}>
              <TableCell>{risk.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default RiskManagement;
