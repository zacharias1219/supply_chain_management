import { useEffect, useState } from 'react';

interface Risk {
  description: string;
  impact: number;
  likelihood: number;
}

interface RiskSummaryData {
  totalRisks: number;
  criticalRisks: Risk[];
}

const RiskSummary = () => {
  const [summary, setSummary] = useState<RiskSummaryData>({
    totalRisks: 0,
    criticalRisks: [],
  });

  useEffect(() => {
    const fetchSummary = async () => {
      const res = await fetch('/api/risks/summary');
      const data: RiskSummaryData = await res.json();
      setSummary(data);
    };
    fetchSummary();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Risk Summary</h2>
      <p>Total Risks: {summary.totalRisks}</p>
      <h3 className="text-lg font-bold mt-4">Critical Risks:</h3>
      <ul>
        {summary.criticalRisks.map((risk, index) => (
          <li key={index}>
            {risk.description} - Impact: {risk.impact}, Likelihood: {risk.likelihood}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RiskSummary;
