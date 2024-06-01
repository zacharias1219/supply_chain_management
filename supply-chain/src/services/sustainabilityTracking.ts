// src/services/sustainabilityTracking.ts
type SustainabilityItem = {
    id: number;
    description: string;
    impact: string;
  };
  
  const sustainabilityData: SustainabilityItem[] = [
    { id: 1, description: 'Carbon footprint', impact: 'Low' },
    { id: 2, description: 'Energy usage', impact: 'Medium' },
  ];
  
  export function getSustainabilityData(): SustainabilityItem[] {
    return sustainabilityData;
  }
  