import { useEffect, useState } from 'react';

interface OptimizationSuggestion {
  _id: string;
  totalDistance: number;
  count: number;
}

const RouteOptimizationSuggestions = () => {
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      const res = await fetch('/api/routes/optimization-suggestions');
      const data = await res.json();
      setSuggestions(data);
    };
    fetchSuggestions();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Route Optimization Suggestions</h2>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>
            Starting Point: {suggestion._id}, Total Distance: {suggestion.totalDistance} km, Routes Count: {suggestion.count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RouteOptimizationSuggestions;
