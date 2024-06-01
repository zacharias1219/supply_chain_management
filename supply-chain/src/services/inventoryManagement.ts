// src/services/inventoryManagement.ts
type InventoryItem = {
    id: number;
    name: string;
    quantity: number;
  };
  
  const inventoryData: InventoryItem[] = [
    { id: 1, name: 'Item 1', quantity: 100 },
    { id: 2, name: 'Item 2', quantity: 200 },
  ];
  
  export function getInventory(): InventoryItem[] {
    return inventoryData;
  }
  