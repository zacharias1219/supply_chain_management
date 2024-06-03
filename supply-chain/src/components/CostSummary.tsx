import { useEffect, useState } from 'react';

interface Cost {
  description: string;
  amount: number;
}

interface CostSummaryData {
  totalCost: number;
  mostSignificantCosts: Cost[];
}

const CostSummary = () => {
  const [summary, setSummary] = useState<CostSummaryData>({
    totalCost: 0,
    mostSignificantCosts: [],
  });

  useEffect(() => {
    const fetchSummary = async () => {
      const res = await fetch('/api/costs/summary');
      const data = await res.json();
      setSummary(data);
    };
    fetchSummary();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Cost Summary</h2>
      <p>Total Cost: ${summary.totalCost}</p>
      <h3 className="text-lg font-bold mt-4">Most Significant Costs:</h3>
      <ul>
        {summary.mostSignificantCosts.map((cost, index) => (
          <li key={index}>
            {cost.description}: ${cost.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CostSummary;
