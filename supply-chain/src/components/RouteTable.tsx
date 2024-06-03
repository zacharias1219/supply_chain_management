import { useState } from 'react';

interface Route {
  _id: string;
  startingPoint: string;
  destination: string;
  waypoints: string[];
  distance: number;
  estimatedTime: number;
}

interface RouteTableProps {
  routes: Route[];
  onEdit: (route: Route) => void;
  onDelete: (id: string) => void;
}

const RouteTable = ({ routes, onEdit, onDelete }: RouteTableProps) => {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredRoutes = routes.filter(route =>
    route.startingPoint.toLowerCase().includes(search.toLowerCase()) &&
    route.destination.toLowerCase().includes(categoryFilter.toLowerCase())
  );

  return (
    <div>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search Starting Point"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Search Destination"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full p-2 border rounded ml-2"
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Starting Point</th>
            <th className="py-2">Destination</th>
            <th className="py-2">Waypoints</th>
            <th className="py-2">Distance (km)</th>
            <th className="py-2">Estimated Time (min)</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRoutes.map((route) => (
            <tr key={route._id}>
              <td className="border px-4 py-2">{route.startingPoint}</td>
              <td className="border px-4 py-2">{route.destination}</td>
              <td className="border px-4 py-2">{route.waypoints.join(', ')}</td>
              <td className="border px-4 py-2">{route.distance}</td>
              <td className="border px-4 py-2">{route.estimatedTime}</td>
              <td className="border px-4 py-2">
                <button onClick={() => onEdit(route)} className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                <button onClick={() => onDelete(route._id)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RouteTable;
