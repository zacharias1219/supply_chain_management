// src/components/DemandForecasting.tsx
import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';

const DemandForecasting = () => {
  const [prompt, setPrompt] = useState('');
  const [forecast, setForecast] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleForecast = async () => {
    setLoading(true);
    setForecast(null);

    try {
      const response = await fetch('/api/demandForecasting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      if (response.ok) {
        setForecast(data.forecast);
      } else {
        console.error('Error fetching forecast:', data.error);
        setForecast('Error fetching forecast.');
      }
    } catch (error) {
      console.error('Error fetching forecast:', error);
      setForecast('Error fetching forecast.');
    }

    setLoading(false);
  };

  return (
    <Card className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Demand Forecasting</h2>
      <Input
        type="text"
        placeholder="Enter your prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="mb-4 w-full"
      />
      <Button onClick={handleForecast} disabled={loading} className="bg-green-500 text-white">
        {loading ? 'Fetching...' : 'Get Forecast'}
      </Button>
      {forecast && (
        <div className="mt-4">
          <h3 className="text-xl font-bold">Forecast:</h3>
          <p>{forecast}</p>
        </div>
      )}
    </Card>
  );
};

export default DemandForecasting;
