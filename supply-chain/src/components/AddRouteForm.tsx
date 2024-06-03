import { useState } from 'react';

interface AddRouteFormProps {
  onAdd: () => void;
}

const AddRouteForm = ({ onAdd }: AddRouteFormProps) => {
  const [startingPoint, setStartingPoint] = useState('');
  const [destination, setDestination] = useState('');
  const [waypoints, setWaypoints] = useState('');
  const [distance, setDistance] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/routes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        startingPoint,
        destination,
        waypoints: waypoints.split(',').map(w => w.trim()),
        distance,
        estimatedTime
      }),
    });
    if (res.ok) {
      onAdd();
      setStartingPoint('');
      setDestination('');
      setWaypoints('');
      setDistance(0);
      setEstimatedTime(0);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Add Route</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Starting Point</label>
        <input type="text" value={startingPoint} onChange={(e) => setStartingPoint(e.target.value)} className="w-full p-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Destination</label>
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full p-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Waypoints (comma-separated)</label>
        <input type="text" value={waypoints} onChange={(e) => setWaypoints(e.target.value)} className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Distance (km)</label>
        <input type="number" value={distance} onChange={(e) => setDistance(parseInt(e.target.value))} className="w-full p-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Estimated Time (minutes)</label>
        <input type="number" value={estimatedTime} onChange={(e) => setEstimatedTime(parseInt(e.target.value))} className="w-full p-2 border rounded" required />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add Route</button>
    </form>
  );
};

export default AddRouteForm;
