import { useEffect, useState } from 'react';

interface Notification {
  id: number;
  message: string;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      // Mock data for notifications
      const notificationsData: Notification[] = [
        { id: 1, message: 'Low inventory alert for Product A' },
        { id: 2, message: 'New risk identified in supplier chain' },
        { id: 3, message: 'Sustainability report available' },
      ];
      setNotifications(notificationsData);
    };
    fetchNotifications();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg mt-6">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id} className="mb-2">
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
