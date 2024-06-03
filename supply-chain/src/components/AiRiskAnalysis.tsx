import { useEffect, useState } from 'react';

const AiRiskAnalysis = () => {
  const [analysis, setAnalysis] = useState('');

  useEffect(() => {
    const fetchAnalysis = async () => {
      const res = await fetch('/api/risks/ai-analysis');
      const data = await res.json();
      setAnalysis(data.analysis);
    };
    fetchAnalysis();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">AI-Powered Risk Analysis</h2>
      <p>{analysis}</p>
    </div>
  );
};

export default AiRiskAnalysis;
