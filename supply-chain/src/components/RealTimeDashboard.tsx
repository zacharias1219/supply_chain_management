import { useEffect, useState } from 'react';

interface Inventory {
  name: string;
  quantity: number;
  category: string;
}

interface Order {
  orderId: string;
  status: string;
  amount: number;
  date: string;
}

interface Delivery {
  deliveryId: string;
  status: string;
  date: string;
}

interface RealTimeData {
  inventoryData: Inventory[];
  orderData: Order[];
  deliveryData: Delivery[];
}

const RealTimeDashboard = () => {
  const [data, setData] = useState<RealTimeData>({
    inventoryData: [],
    orderData: [],
    deliveryData: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/realtime/data');
      const data: RealTimeData = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Real-Time Dashboard</h2>
      <div>
        <h3 className="text-lg font-bold">Inventory Data</h3>
        <ul>
          {data.inventoryData.map((item, index) => (
            <li key={index}>
              {item.name} (Category: {item.category}) - {item.quantity} left
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold">Order Data</h3>
        <ul>
          {data.orderData.map((order, index) => (
            <li key={index}>
              Order ID: {order.orderId}, Status: {order.status}, Amount: {order.amount}, Date: {new Date(order.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold">Delivery Data</h3>
        <ul>
          {data.deliveryData.map((delivery, index) => (
            <li key={index}>
              Delivery ID: {delivery.deliveryId}, Status: {delivery.status}, Date: {new Date(delivery.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RealTimeDashboard;
