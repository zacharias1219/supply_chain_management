// src/services/costOptimization.ts
type Cost = {
    id: number;
    description: string;
    amount: number;
  };
  
  const costData: Cost[] = [
    { id: 1, description: 'Transportation', amount: 1000 },
    { id: 2, description: 'Warehousing', amount: 2000 },
  ];
  
  export function getCosts(): Cost[] {
    return costData;
  }
  