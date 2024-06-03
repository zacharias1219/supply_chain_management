import { useEffect, useState } from 'react';

interface Risk {
  description: string;
  impact: number;
  likelihood: number;
}

interface RiskOptimizationData {
  highLikelihoodRisks: Risk[];
  highImpactRisks: Risk[];
}

const RiskOptimizationSuggestions = () => {
  const [suggestions, setSuggestions] = useState<RiskOptimizationData>({
    highLikelihoodRisks: [],
    highImpactRisks: [],
  });

  useEffect(() => {
    const fetchSuggestions = async () => {
      const res = await fetch('/api/risks/optimization-suggestions');
      const data: RiskOptimizationData = await res.json();
      setSuggestions(data);
    };
    fetchSuggestions();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Risk Optimization Suggestions</h2>
      <h3 className="text-lg font-bold mt-4">High Likelihood Risks:</h3>
      <ul>
        {suggestions.highLikelihoodRisks.map((risk, index) => (
          <li key={index}>
            {risk.description} - Likelihood: {risk.likelihood}, Impact: {risk.impact}
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold mt-4">High Impact Risks:</h3>
      <ul>
        {suggestions.highImpactRisks.map((risk, index) => (
          <li key={index}>
            {risk.description} - Impact: {risk.impact}, Likelihood: {risk.likelihood}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RiskOptimizationSuggestions;
