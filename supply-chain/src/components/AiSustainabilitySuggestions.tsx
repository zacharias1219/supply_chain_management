import { useEffect, useState } from 'react';

const AiSustainabilitySuggestions = () => {
  const [suggestions, setSuggestions] = useState('');

  useEffect(() => {
    const fetchSuggestions = async () => {
      const res = await fetch('/api/sustainability/ai-suggestions');
      const data = await res.json();
      setSuggestions(data.suggestions);
    };
    fetchSuggestions();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">AI-Powered Sustainability Suggestions</h2>
      <p>{suggestions}</p>
    </div>
  );
};

export default AiSustainabilitySuggestions;
