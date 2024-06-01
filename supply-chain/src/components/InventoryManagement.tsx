// src/components/InventoryManagement.tsx
import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Table, TableHeader, TableBody, TableRow, TableCell } from './ui/table';

type InventoryItem = {
  id: number;
  name: string;
  quantity: number;
};

const InventoryManagement = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  useEffect(() => {
    fetch('/api/inventory')
      .then((response) => response.json())
      .then((data: InventoryItem[]) => setInventory(data));
  }, []);

  return (
    <Card className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Inventory Management</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Quantity</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default InventoryManagement;
