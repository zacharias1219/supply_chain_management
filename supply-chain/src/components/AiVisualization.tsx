import { useEffect, useState } from 'react';

const AiVisualization = () => {
  const [visualization, setVisualization] = useState('');

  useEffect(() => {
    const fetchVisualization = async () => {
      const res = await fetch('/api/realtime/ai-visualization');
      const data = await res.json();
      setVisualization(data.visualization);
    };
    fetchVisualization();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">AI-Powered Visualization</h2>
      <p>{visualization}</p>
    </div>
  );
};

export default AiVisualization;
