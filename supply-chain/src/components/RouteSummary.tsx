import { useEffect, useState } from 'react';

interface Route {
  startingPoint: string;
  destination: string;
  distance: number;
}

interface RouteSummaryData {
  totalRoutes: number;
  longestRoute: Route | null;
  shortestRoute: Route | null;
}

const RouteSummary = () => {
  const [summary, setSummary] = useState<RouteSummaryData>({
    totalRoutes: 0,
    longestRoute: null,
    shortestRoute: null,
  });

  useEffect(() => {
    const fetchSummary = async () => {
      const res = await fetch('/api/routes/summary');
      const data = await res.json();
      setSummary(data);
    };
    fetchSummary();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Route Summary</h2>
      <p>Total Routes: {summary.totalRoutes}</p>
      {summary.longestRoute && (
        <>
          <h3 className="text-lg font-bold mt-4">Longest Route:</h3>
          <p>{summary.longestRoute.startingPoint} to {summary.longestRoute.destination} - {summary.longestRoute.distance} km</p>
        </>
      )}
      {summary.shortestRoute && (
        <>
          <h3 className="text-lg font-bold mt-4">Shortest Route:</h3>
          <p>{summary.shortestRoute.startingPoint} to {summary.shortestRoute.destination} - {summary.shortestRoute.distance} km</p>
        </>
      )}
    </div>
  );
};

export default RouteSummary;
