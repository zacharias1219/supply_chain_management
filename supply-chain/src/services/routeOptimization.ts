// src/services/routeOptimization.ts
type Route = {
    id: number;
    description: string;
  };
  
  const routeData: Route[] = [
    { id: 1, description: 'Route 1: Warehouse to Store 1' },
    { id: 2, description: 'Route 2: Warehouse to Store 2' },
  ];
  
  export function getRoutes(): Route[] {
    return routeData;
  }
  