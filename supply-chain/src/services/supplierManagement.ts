// src/services/supplierManagement.ts
type Supplier = {
    id: number;
    name: string;
  };
  
  const supplierData: Supplier[] = [
    { id: 1, name: 'Supplier 1' },
    { id: 2, name: 'Supplier 2' },
  ];
  
  export function getSuppliers(): Supplier[] {
    return supplierData;
  }
  