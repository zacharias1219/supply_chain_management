// src/components/SupplierManagement.tsx
import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Table, TableHeader, TableBody, TableRow, TableCell } from './ui/table';

type Supplier = {
  id: number;
  name: string;
};

const SupplierManagement = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  useEffect(() => {
    fetch('/api/suppliers')
      .then((response) => response.json())
      .then((data: Supplier[]) => setSuppliers(data));
  }, []);

  return (
    <Card className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Supplier Management</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Supplier</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suppliers.map((supplier) => (
            <TableRow key={supplier.id}>
              <TableCell>{supplier.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default SupplierManagement;
