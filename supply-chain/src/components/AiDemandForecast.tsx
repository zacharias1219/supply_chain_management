import { useEffect, useState } from 'react';

const AiDemandForecast = () => {
  const [forecast, setForecast] = useState('');

  useEffect(() => {
    const fetchForecast = async () => {
      const res = await fetch('/api/demand/ai-forecast');
      const data = await res.json();
      setForecast(data.forecast);
    };
    fetchForecast();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">AI-Powered Demand Forecast</h2>
      <p>{forecast}</p>
    </div>
  );
};

export default AiDemandForecast;
