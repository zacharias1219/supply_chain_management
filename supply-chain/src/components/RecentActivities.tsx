import { useEffect, useState } from 'react';

interface Activity {
  id: number;
  description: string;
  date: string;
}

const RecentActivities = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      // Mock data for recent activities
      const activitiesData: Activity[] = [
        { id: 1, description: 'Updated inventory levels', date: new Date().toLocaleDateString() },
        { id: 2, description: 'Added a new supplier', date: new Date().toLocaleDateString() },
        { id: 3, description: 'Optimized delivery routes', date: new Date().toLocaleDateString() },
      ];
      setActivities(activitiesData);
    };
    fetchActivities();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg mt-6">
      <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id} className="mb-2">
            {activity.description} - <span className="text-gray-500">{activity.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
