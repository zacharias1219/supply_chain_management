// src/services/riskManagement.ts
type Risk = {
    id: number;
    description: string;
  };
  
  const riskData: Risk[] = [
    { id: 1, description: 'Supplier disruption' },
    { id: 2, description: 'Natural disaster' },
  ];
  
  export function getRisks(): Risk[] {
    return riskData;
  }
  